import { env } from '../../config/env';
import { User } from '../user/user.model';
import { UserStatus } from '../../utils/constants';
import { verifyApiSecret } from '../../utils/crypto';
import { AppError, ForbiddenError, UnauthorizedError } from '../../utils/errors';
import { GameLaunchInput, toTxGameLaunchBody } from './game.validation';

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

export class GameService {
  async launch(input: GameLaunchInput) {
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

    const upstreamBody = toTxGameLaunchBody(input);
    const upstream = await this.callUpstream(upstreamBody);

    if (upstream.code !== 0) {
      throw new AppError(upstream.msg || 'Game launch failed upstream', 502, {
        code: upstream.code,
        msg: upstream.msg,
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

  private async callUpstream(
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
}

export const gameService = new GameService();
