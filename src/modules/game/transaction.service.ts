import { User } from '../user/user.model';
import { UserRole, UserStatus } from '../../utils/constants';
import { verifyApiSecret } from '../../utils/crypto';
import { ForbiddenError, UnauthorizedError } from '../../utils/errors';
import { GameTransaction } from './transaction.model';
import {
  extractPrefixFromMemberAccount,
  FetchTransactionsInput,
  IngestTransactionsInput,
} from './transaction.validation';

type IngestDoc = {
  agency_uid: string;
  serial_number: string;
  currency_code: string;
  game_uid: string;
  member_account: string;
  prefix: string;
  bet_amount: string;
  win_amount: string;
  timestamp: string;
  game_round: string;
};

function parseAmount(value: string | undefined | null): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function roundMoney(value: number): number {
  return Math.round(value * 10000) / 10000;
}

export class TransactionService {
  async ingest(input: IngestTransactionsInput) {
    const docs: IngestDoc[] = input.records.map((record) => ({
      agency_uid: record.agency_uid,
      serial_number: record.serial_number,
      currency_code: record.currency_code,
      game_uid: record.game_uid,
      member_account: record.member_account,
      prefix: extractPrefixFromMemberAccount(record.member_account),
      bet_amount: record.bet_amount,
      win_amount: record.win_amount,
      timestamp: record.timestamp,
      game_round: record.game_round,
    }));

    const ops = docs.map((doc) => ({
      updateOne: {
        filter: { serial_number: doc.serial_number },
        update: { $setOnInsert: doc },
        upsert: true,
      },
    }));

    const result = await GameTransaction.bulkWrite(ops, { ordered: false });
    const inserted = result.upsertedCount;
    const duplicates = Math.max(0, docs.length - inserted);

    // Only newly inserted rows (not duplicate serial_number) affect GGR.
    const newlyInserted: IngestDoc[] = [];
    const upsertedIds = result.upsertedIds ?? {};
    for (const [indexKey, _id] of Object.entries(upsertedIds)) {
      const index = Number(indexKey);
      if (Number.isInteger(index) && docs[index] && _id) {
        newlyInserted.push(docs[index]);
      }
    }

    const deductionByPrefix = new Map<string, number>();
    for (const doc of newlyInserted) {
      if (!doc.prefix) continue;

      const winAmount = parseAmount(doc.win_amount);
      // Win: win_amount > 0 → no GGR change
      if (winAmount > 0) continue;

      const betAmount = parseAmount(doc.bet_amount);
      if (betAmount <= 0) continue;

      const lossDeduction = betAmount * 0.1;
      deductionByPrefix.set(
        doc.prefix,
        (deductionByPrefix.get(doc.prefix) ?? 0) + lossDeduction,
      );
    }

    const deductions: { prefix: string; amount: number }[] = [];

    await Promise.all(
      [...deductionByPrefix.entries()].map(async ([prefix, rawAmount]) => {
        const amount = roundMoney(rawAmount);
        if (amount <= 0) return;

        const updateResult = await User.updateOne(
          { prefix, role: UserRole.USER },
          [
            {
              $set: {
                ggrBalance: {
                  $max: [0, { $subtract: [{ $ifNull: ['$ggrBalance', 0] }, amount] }],
                },
              },
            },
          ],
          { updatePipeline: true },
        );

        // Only report when a matching user was updated
        if (updateResult.matchedCount > 0) {
          deductions.push({ prefix, amount });
        }
      }),
    );

    deductions.sort((a, b) => a.prefix.localeCompare(b.prefix));

    return {
      received: docs.length,
      inserted,
      duplicates,
      ggr: {
        processed: newlyInserted.length,
        deductions,
      },
    };
  }

  async fetchForUser(input: FetchTransactionsInput) {
    const user = await User.findOne({ prefix: input.prefix }).select('+apiSecretHash');

    if (!user) {
      throw new UnauthorizedError('Invalid prefix or API secret');
    }

    const validSecret = await verifyApiSecret(input.apiSecret, user.apiSecretHash);
    if (!validSecret) {
      throw new UnauthorizedError('Invalid prefix or API secret');
    }

    if (user.status === UserStatus.PAUSE) {
      throw new ForbiddenError('Account is paused');
    }

    const filter: Record<string, unknown> = {
      prefix: user.prefix,
    };

    if (input.member_account) {
      filter.member_account = input.member_account;
    }
    if (input.game_uid) {
      filter.game_uid = input.game_uid;
    }
    if (input.fromDate || input.toDate) {
      const timestampFilter: Record<string, string> = {};
      if (input.fromDate) timestampFilter.$gte = input.fromDate;
      if (input.toDate) timestampFilter.$lte = input.toDate;
      filter.timestamp = timestampFilter;
    }

    const page = input.page;
    const limit = input.limit;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      GameTransaction.find(filter).sort({ timestamp: -1 }).skip(skip).limit(limit).lean(),
      GameTransaction.countDocuments(filter),
    ]);

    return {
      items: items.map((doc) => ({
        id: String(doc._id),
        agency_uid: doc.agency_uid,
        serial_number: doc.serial_number,
        currency_code: doc.currency_code,
        game_uid: doc.game_uid,
        member_account: doc.member_account,
        bet_amount: doc.bet_amount,
        win_amount: doc.win_amount,
        timestamp: doc.timestamp,
        game_round: doc.game_round,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
    };
  }
}

export const transactionService = new TransactionService();
