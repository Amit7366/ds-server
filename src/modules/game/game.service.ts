import { env } from '../../config/env';
import { User } from '../user/user.model';
import {
  BillingPlan,
  DEFAULT_BILLING_PLAN,
  resolveGgrDeductionRate,
  resolveUserCurrency,
  UserStatus,
} from '../../utils/constants';
import { verifyApiSecret } from '../../utils/crypto';
import { AppError, ForbiddenError, UnauthorizedError, ValidationError } from '../../utils/errors';
import {
  GameLaunchInput,
  GetWithdrawInput,
  toTxGameLaunchBody,
  toTxGetWithdrawBody,
} from './game.validation';

type TxGameLaunchResponse = {
  code?: number;
  msg?: string;
  raw?: unknown;
  step1?: unknown;
  step2?: unknown;
  step3?: unknown;
  payload?: unknown;
  [key: string]: unknown;
};

type TxGetWithdrawResponse = {
  status?: boolean;
  message?: string;
  amount?: string | number;
  error?: unknown;
  [key: string]: unknown;
};

export class GameService {
  private async authenticatePartner(prefix: string, apiSecret: string) {
    const user = await User.findOne({ prefix }).select('+apiSecretHash');

    if (!user) {
      throw new UnauthorizedError('Invalid prefix or API secret');
    }

    const validSecret = await verifyApiSecret(apiSecret, user.apiSecretHash);
    if (!validSecret) {
      throw new UnauthorizedError('Invalid prefix or API secret');
    }

    if (user.status === UserStatus.PAUSE) {
      throw new ForbiddenError('Account is paused');
    }

    return user;
  }

  async launch(input: GameLaunchInput) {
    const user = await this.authenticatePartner(input.prefix, input.apiSecret);

    const ggrBalance = user.ggrBalance ?? 0;
    const billingPlan = user.billingPlan ?? DEFAULT_BILLING_PLAN;
    if (billingPlan === BillingPlan.MONTHLY) {
      if (ggrBalance <= 0) {
        throw new ValidationError('Prepaid GGR balance is exhausted', {
          billingPlan,
          ggrBalance,
        });
      }
    } else {
      const ggrRate = resolveGgrDeductionRate(user.ggrDeductionPercent);
      const ggrRequired = Math.round(input.balance * ggrRate * 10000) / 10000;
      if (ggrRequired > ggrBalance) {
        throw new ValidationError('Balance exceeds available GGR balance', {
          balance: input.balance,
          ggrRequired,
          ggrBalance,
        });
      }
    }

    const upstreamBody = toTxGameLaunchBody({
      ...input,
      currencyCode: resolveUserCurrency(user.currency),
    });
    const upstream = await this.callLaunchUpstream(upstreamBody);

    if (upstream.code !== 0) {
      throw new AppError(upstream.msg || 'Game launch failed upstream', 502, {
        code: upstream.code,
        msg: upstream.msg,
        payload: upstream.payload,
        raw: upstream.raw,
      });
    }

    if (upstream.payload === undefined || upstream.payload === null) {
      throw new AppError('Upstream did not return a launch payload', 502, {
        code: upstream.code,
        msg: upstream.msg,
        raw: upstream.raw,
      });
    }

    // Partners only receive the final session payload (e.g. game launch URL).
    // Hide internal provider player naming from the public response.
    if (typeof upstream.payload === 'object' && upstream.payload !== null && !Array.isArray(upstream.payload)) {
      const { player_name: _hidden, ...safePayload } = upstream.payload as Record<string, unknown>;
      return safePayload;
    }

    return upstream.payload;
  }

  async getWithdraw(input: GetWithdrawInput) {
    const user = await this.authenticatePartner(input.prefix, input.apiSecret);

    const upstreamBody = toTxGetWithdrawBody({
      ...input,
      currencyCode: resolveUserCurrency(user.currency),
    });
    const upstream = await this.callWithdrawUpstream(upstreamBody);

    if (upstream.status !== true) {
      throw new AppError(upstream.message || 'Withdraw failed upstream', 502, {
        status: upstream.status,
        message: upstream.message,
        amount: upstream.amount,
        error: upstream.error,
      });
    }

    return {
      amount: upstream.amount,
      status: upstream.status,
      message: upstream.message,
    };
  }

  private async callLaunchUpstream(
    body: ReturnType<typeof toTxGameLaunchBody>,
  ): Promise<TxGameLaunchResponse> {
    let response: Response;
    try {
      response = await fetch(env.GAME_LAUNCH_UPSTREAM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });
    } catch (err) {
      throw new AppError('Game launch provider unavailable', 502, {
        reason: err instanceof Error ? err.message : 'network_error',
      });
    }

    const text = await response.text();
    let data: TxGameLaunchResponse;
    try {
      data = JSON.parse(text) as TxGameLaunchResponse;
    } catch {
      throw new AppError('Invalid response from game launch provider', 502, {
        status: response.status,
        body: text.slice(0, 500),
      });
    }

    if (!response.ok && data.code === undefined) {
      throw new AppError('Game launch provider request failed', 502, {
        status: response.status,
        body: data,
      });
    }

    return data;
  }

  private async callWithdrawUpstream(
    body: ReturnType<typeof toTxGetWithdrawBody>,
  ): Promise<TxGetWithdrawResponse> {
    let response: Response;
    try {
      response = await fetch(env.GET_WITHDRAW_UPSTREAM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });
    } catch (err) {
      throw new AppError('Withdraw provider unavailable', 502, {
        reason: err instanceof Error ? err.message : 'network_error',
      });
    }

    const text = await response.text();
    let data: TxGetWithdrawResponse;
    try {
      data = JSON.parse(text) as TxGetWithdrawResponse;
    } catch {
      throw new AppError('Invalid response from withdraw provider', 502, {
        status: response.status,
        body: text.slice(0, 500),
      });
    }

    if (!response.ok && data.status === undefined) {
      throw new AppError('Withdraw provider request failed', 502, {
        status: response.status,
        body: data,
      });
    }

    return data;
  }
}

export const gameService = new GameService();
