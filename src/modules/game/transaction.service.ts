import { GameTransaction } from './transaction.model';
import {
  extractPrefixFromMemberAccount,
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
}

export const transactionService = new TransactionService();
