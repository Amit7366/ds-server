import { User } from '../user/user.model';
import {
  DEFAULT_GGR_DEDUCTION_PERCENT,
  resolveGgrDeductionRate,
  UserRole,
  UserStatus,
} from '../../utils/constants';
import { verifyApiSecret } from '../../utils/crypto';
import { ForbiddenError, UnauthorizedError } from '../../utils/errors';
import { buildMemberAccount, toPublicPlayerId } from './game.validation';
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

    // Know which serials are new before write — more reliable than bulkWrite.upsertedIds.
    const serials = docs.map((d) => d.serial_number);
    const existing = await GameTransaction.find({ serial_number: { $in: serials } })
      .select('serial_number')
      .lean();
    const existingSet = new Set(existing.map((row) => row.serial_number));
    const newDocs = docs.filter((d) => !existingSet.has(d.serial_number));

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

    // Prefer upsertedIds when available; fall back to pre-checked newDocs only if inserts happened.
    const newlyInserted: IngestDoc[] = [];
    const upsertedIds = result.upsertedIds as
      | Record<string, unknown>
      | Map<number, unknown>
      | undefined;

    if (upsertedIds instanceof Map && upsertedIds.size > 0) {
      for (const [index] of upsertedIds) {
        if (docs[index]) newlyInserted.push(docs[index]);
      }
    } else if (upsertedIds && Object.keys(upsertedIds).length > 0) {
      for (const [indexKey, _id] of Object.entries(upsertedIds)) {
        const index = Number(indexKey);
        if (Number.isInteger(index) && docs[index] && _id) {
          newlyInserted.push(docs[index]);
        }
      }
    } else if (inserted > 0) {
      newlyInserted.push(...newDocs);
    }

    const deductionByPrefix = new Map<string, number>();
    const prefixes = [
      ...new Set(
        newlyInserted
          .map((doc) => doc.prefix)
          .filter((prefix): prefix is string => Boolean(prefix)),
      ),
    ];
    const rateByPrefix = new Map<string, number>();
    if (prefixes.length > 0) {
      const partners = await User.find({
        prefix: { $in: prefixes },
        role: UserRole.USER,
      })
        .select('prefix ggrDeductionPercent')
        .lean();
      for (const partner of partners) {
        rateByPrefix.set(partner.prefix, resolveGgrDeductionRate(partner.ggrDeductionPercent));
      }
    }

    for (const doc of newlyInserted) {
      if (!doc.prefix) continue;

      const winAmount = parseAmount(doc.win_amount);
      // Win: win_amount > 0 → no GGR change
      if (winAmount > 0) continue;

      const betAmount = parseAmount(doc.bet_amount);
      if (betAmount <= 0) continue;

      const rate = rateByPrefix.get(doc.prefix) ?? resolveGgrDeductionRate(null);
      const lossDeduction = betAmount * rate;
      deductionByPrefix.set(
        doc.prefix,
        (deductionByPrefix.get(doc.prefix) ?? 0) + lossDeduction,
      );
    }

    const deductions: { prefix: string; amount: number }[] = [];

    for (const [prefix, rawAmount] of deductionByPrefix.entries()) {
      const amount = roundMoney(rawAmount);
      if (amount <= 0) continue;

      // Native collection update avoids Mongoose pipeline option quirks.
      const updateResult = await User.collection.updateOne({ prefix, role: UserRole.USER }, [
        {
          $set: {
            ggrBalance: {
              $max: [0, { $subtract: [{ $ifNull: ['$ggrBalance', 0] }, amount] }],
            },
            updatedAt: new Date(),
          },
        },
      ]);

      if (updateResult.matchedCount > 0) {
        deductions.push({ prefix, amount });
        console.log(`[ggr] prefix=${prefix} deducted=${amount}`);
      } else {
        console.warn(`[ggr] no user found for prefix=${prefix} amount=${amount}`);
      }
    }

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
      // Accept plain playerId or full provider member_account; query always uses stored format.
      filter.member_account = buildMemberAccount(input.member_account, user.prefix);
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
        member_account: toPublicPlayerId(doc.member_account, user.prefix),
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

  /**
   * Dashboard list for a logged-in partner: filter by prefix, compute live GGR deduction.
   */
  async listForDashboard(input: {
    prefix: string;
    ggrDeductionPercent?: number | null;
    page: number;
    limit: number;
  }) {
    const prefix = input.prefix.trim().toUpperCase();
    const rate = resolveGgrDeductionRate(input.ggrDeductionPercent);
    const percent =
      typeof input.ggrDeductionPercent === 'number' && Number.isFinite(input.ggrDeductionPercent)
        ? input.ggrDeductionPercent
        : DEFAULT_GGR_DEDUCTION_PERCENT;

    const page = input.page;
    const limit = input.limit;
    const skip = (page - 1) * limit;
    const filter = { prefix };

    const [docs, total] = await Promise.all([
      GameTransaction.find(filter).sort({ timestamp: -1 }).skip(skip).limit(limit).lean(),
      GameTransaction.countDocuments(filter),
    ]);

    const items = docs.map((doc) => {
      const betAmount = parseAmount(doc.bet_amount);
      const winAmount = parseAmount(doc.win_amount);
      const isWin = winAmount > 0;
      const ggrDeduction = isWin || betAmount <= 0 ? 0 : roundMoney(betAmount * rate);

      return {
        id: String(doc._id),
        serial_number: doc.serial_number,
        game_uid: doc.game_uid,
        member_account: toPublicPlayerId(doc.member_account, prefix),
        bet_amount: betAmount,
        win_amount: winAmount,
        result: isWin ? ('win' as const) : ('loss' as const),
        ggrDeduction,
        currency_code: doc.currency_code,
        timestamp: doc.timestamp,
        game_round: doc.game_round,
      };
    });

    return {
      ggrDeductionPercent: percent,
      items,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
    };
  }

  /**
   * Lifetime betting totals for a partner prefix.
   * Win/loss and GGR deduction follow the same rules as dashboard transactions:
   * win_amount > 0 is a win (no GGR); otherwise the bet is a loss and GGR is bet * current rate.
   */
  async summarizeForPrefix(input: {
    prefix: string;
    ggrDeductionPercent?: number | null;
  }) {
    const prefix = input.prefix.trim().toUpperCase();
    const rate = resolveGgrDeductionRate(input.ggrDeductionPercent);

    const [row] = await GameTransaction.aggregate<{
      totalBetAmount: number;
      totalWin: number;
      totalLoss: number;
      totalGgrDeduction: number;
      transactionCount: number;
      winCount: number;
      lossCount: number;
    }>([
      { $match: { prefix } },
      {
        $project: {
          bet: {
            $convert: { input: '$bet_amount', to: 'double', onError: 0, onNull: 0 },
          },
          win: {
            $convert: { input: '$win_amount', to: 'double', onError: 0, onNull: 0 },
          },
        },
      },
      {
        $group: {
          _id: null,
          totalBetAmount: { $sum: '$bet' },
          totalWin: {
            $sum: { $cond: [{ $gt: ['$win', 0] }, '$win', 0] },
          },
          totalLoss: {
            $sum: { $cond: [{ $lte: ['$win', 0] }, '$bet', 0] },
          },
          totalGgrDeduction: {
            $sum: {
              $cond: [
                { $and: [{ $lte: ['$win', 0] }, { $gt: ['$bet', 0] }] },
                { $multiply: ['$bet', rate] },
                0,
              ],
            },
          },
          transactionCount: { $sum: 1 },
          winCount: {
            $sum: { $cond: [{ $gt: ['$win', 0] }, 1, 0] },
          },
          lossCount: {
            $sum: { $cond: [{ $lte: ['$win', 0] }, 1, 0] },
          },
        },
      },
    ]);

    return {
      totalBetAmount: roundMoney(row?.totalBetAmount ?? 0),
      totalWin: roundMoney(row?.totalWin ?? 0),
      totalLoss: roundMoney(row?.totalLoss ?? 0),
      totalGgrDeduction: roundMoney(row?.totalGgrDeduction ?? 0),
      transactionCount: row?.transactionCount ?? 0,
      winCount: row?.winCount ?? 0,
      lossCount: row?.lossCount ?? 0,
    };
  }
}

export const transactionService = new TransactionService();
