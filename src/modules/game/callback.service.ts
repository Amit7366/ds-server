import mongoose from 'mongoose';
import { AppError, ValidationError } from '../../utils/errors';
import { extractPrefixFromMemberAccount } from './transaction.validation';
import { PlayerBalance } from './playerBalance.model';
import {
  CallbackGameTransaction,
  ICallbackGameTransaction,
} from './callbackTransaction.model';
import {
  CallbackBalanceInput,
  CallbackCreditInput,
  CallbackSettleInput,
} from './callback.validation';

function roundMoney(value: number): number {
  return Math.round(value * 10000) / 10000;
}

function isDuplicateKey(err: unknown): boolean {
  return (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    (err as { code?: number }).code === 11000
  );
}

function isTransactionUnsupported(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err);
  return /replica set|transaction numbers|IllegalOperation/i.test(message);
}

export type CallbackSettleResult = {
  alreadyProcessed: boolean;
  credit_amount: string;
  balanceBefore: number;
  balanceAfter: number;
  timestamp: string;
  serial_number: string;
  member_account: string;
  currency_code: string;
};

function toSettleResult(
  doc: Pick<
    ICallbackGameTransaction,
    'balance_before' | 'balance_after' | 'serial_number' | 'member_account' | 'currency_code'
  >,
  timestamp: string,
  alreadyProcessed: boolean,
): CallbackSettleResult {
  return {
    alreadyProcessed,
    credit_amount: String(doc.balance_after),
    balanceBefore: doc.balance_before,
    balanceAfter: doc.balance_after,
    timestamp,
    serial_number: doc.serial_number,
    member_account: doc.member_account,
    currency_code: doc.currency_code,
  };
}

export class CallbackService {
  async getBalance(input: CallbackBalanceInput) {
    const wallet = await PlayerBalance.findOne({
      member_account: input.member_account,
      currency_code: input.currency_code,
    }).lean();

    const balance = wallet ? wallet.balance : 0;
    return {
      member_account: input.member_account,
      currency_code: input.currency_code,
      balance,
      credit_amount: String(balance),
    };
  }

  async setBalance(input: CallbackCreditInput) {
    const balance = roundMoney(input.balance);
    const wallet = await PlayerBalance.findOneAndUpdate(
      {
        member_account: input.member_account,
        currency_code: input.currency_code,
      },
      {
        $set: { balance },
        $setOnInsert: {
          member_account: input.member_account,
          currency_code: input.currency_code,
        },
      },
      { upsert: true, new: true },
    );

    return {
      member_account: input.member_account,
      currency_code: input.currency_code,
      balance: wallet?.balance ?? balance,
      credit_amount: String(wallet?.balance ?? balance),
    };
  }

  async settle(input: CallbackSettleInput): Promise<CallbackSettleResult> {
    const existing = await CallbackGameTransaction.findOne({
      serial_number: input.serial_number,
    }).lean();

    if (existing) {
      return toSettleResult(existing, input.timestamp, true);
    }

    try {
      return await this.settleInTransaction(input);
    } catch (err) {
      if (isDuplicateKey(err)) {
        return this.replayExisting(input);
      }
      if (isTransactionUnsupported(err)) {
        return this.settleWithoutTransaction(input);
      }
      throw err;
    }
  }

  private async replayExisting(input: CallbackSettleInput): Promise<CallbackSettleResult> {
    const existing = await CallbackGameTransaction.findOne({
      serial_number: input.serial_number,
    }).lean();

    if (!existing) {
      throw new AppError('Transaction log failed', 500);
    }

    return toSettleResult(existing, input.timestamp, true);
  }

  private async settleInTransaction(input: CallbackSettleInput): Promise<CallbackSettleResult> {
    const session = await mongoose.startSession();
    try {
      let result: CallbackSettleResult | undefined;

      await session.withTransaction(async () => {
        const existing = await CallbackGameTransaction.findOne({
          serial_number: input.serial_number,
        })
          .session(session)
          .lean();

        if (existing) {
          result = toSettleResult(existing, input.timestamp, true);
          return;
        }

        result = await this.applySettle(input, session);
      });

      if (!result) {
        throw new AppError('Balance update failed', 500);
      }

      return result;
    } finally {
      await session.endSession();
    }
  }

  private async settleWithoutTransaction(input: CallbackSettleInput): Promise<CallbackSettleResult> {
    try {
      return await this.applySettle(input);
    } catch (err) {
      if (isDuplicateKey(err)) {
        return this.replayExisting(input);
      }
      throw err;
    }
  }

  private async applySettle(
    input: CallbackSettleInput,
    session?: mongoose.ClientSession,
  ): Promise<CallbackSettleResult> {
    const query = PlayerBalance.findOne({
      member_account: input.member_account,
      currency_code: input.currency_code,
    });
    if (session) query.session(session);
    const wallet = await query;

    const balanceBefore = wallet ? wallet.balance : 0;
    const balanceAfter = roundMoney(balanceBefore - input.bet_amount + input.win_amount);

    if (balanceAfter < 0) {
      throw new ValidationError('Insufficient balance', {
        balanceBefore,
        balanceAfter,
        credit_amount: String(balanceBefore),
      });
    }

    const [created] = await CallbackGameTransaction.create(
      [
        {
          serial_number: input.serial_number,
          member_account: input.member_account,
          prefix: extractPrefixFromMemberAccount(input.member_account),
          bet_amount: input.bet_amount,
          win_amount: input.win_amount,
          game_uid: input.game_uid,
          game_round: input.game_round,
          currency_code: input.currency_code,
          timestamp: input.timestamp,
          balance_before: balanceBefore,
          balance_after: balanceAfter,
          status: 'completed',
        },
      ],
      session ? { session } : undefined,
    );

    if (!created) {
      throw new AppError('Transaction log failed', 500);
    }

    try {
      await PlayerBalance.findOneAndUpdate(
        {
          member_account: input.member_account,
          currency_code: input.currency_code,
        },
        {
          $set: { balance: balanceAfter },
          $setOnInsert: {
            member_account: input.member_account,
            currency_code: input.currency_code,
          },
        },
        { upsert: true, new: true, session },
      );
    } catch (err) {
      if (!session) {
        await CallbackGameTransaction.deleteOne({ _id: created._id });
      }
      throw err;
    }

    return toSettleResult(created, input.timestamp, false);
  }

  /**
   * Log a seamless round for GGR after the operator accepts it.
   * Does not gate on our wallet — operator credit_amount is source of truth.
   */
  async recordSeamlessRound(input: {
    serial_number: string;
    member_account: string;
    bet_amount: number;
    win_amount: number;
    game_uid: string;
    game_round: string;
    currency_code: string;
    timestamp: string;
    credit_amount: number;
  }): Promise<void> {
    const existing = await CallbackGameTransaction.findOne({
      serial_number: input.serial_number,
    }).lean();
    if (existing) {
      await this.setBalance({
        member_account: input.member_account,
        currency_code: input.currency_code,
        balance: roundMoney(input.credit_amount),
      });
      return;
    }

    const balanceAfter = roundMoney(input.credit_amount);
    const balanceBefore = roundMoney(balanceAfter + input.bet_amount - input.win_amount);

    try {
      await CallbackGameTransaction.create({
        serial_number: input.serial_number,
        member_account: input.member_account,
        prefix: extractPrefixFromMemberAccount(input.member_account),
        bet_amount: input.bet_amount,
        win_amount: input.win_amount,
        game_uid: input.game_uid,
        game_round: input.game_round,
        currency_code: input.currency_code,
        timestamp: input.timestamp,
        balance_before: balanceBefore,
        balance_after: balanceAfter,
        status: 'completed',
      });
    } catch (err) {
      if (!isDuplicateKey(err)) {
        throw err;
      }
    }

    await this.setBalance({
      member_account: input.member_account,
      currency_code: input.currency_code,
      balance: balanceAfter,
    });
  }
}

export const callbackService = new CallbackService();
