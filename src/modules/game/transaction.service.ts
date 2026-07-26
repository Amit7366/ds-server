import { User } from '../user/user.model';
import { UserStatus } from '../../utils/constants';
import { verifyApiSecret } from '../../utils/crypto';
import { ForbiddenError, UnauthorizedError } from '../../utils/errors';
import { GameTransaction } from './transaction.model';
import {
  extractPrefixFromMemberAccount,
  FetchTransactionsInput,
  IngestTransactionsInput,
} from './transaction.validation';

export class TransactionService {
  async ingest(input: IngestTransactionsInput) {
    const docs = input.records.map((record) => ({
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

    return {
      received: docs.length,
      inserted,
      duplicates,
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
