import { env } from '../../config/env';
import { UserRole, UserStatus } from '../../utils/constants';
import { decryptApiSecret } from '../../utils/crypto';
import { User } from '../user/user.model';
import { decryptAes256Ecb, encryptAes256Ecb } from './aes256ecb';
import { callbackService } from './callback.service';
import { extractPrefixFromMemberAccount } from './transaction.validation';

const OPERATOR_TIMEOUT_MS = 8000;

type HuiduEnvelope = {
  agency_uid?: string;
  timestamp?: string | number;
  payload?: string;
};

type GameRoundPayload = {
  serial_number?: string;
  member_account?: string;
  bet_amount?: string | number;
  win_amount?: string | number;
  currency_code?: string;
  timestamp?: string | number;
  game_uid?: string;
  game_round?: string;
  data?: unknown;
};

type OperatorCallbackResponse = {
  code?: number;
  msg?: string;
  payload?: string;
};

function missingField(value: unknown): boolean {
  return value === null || value === undefined || value === '';
}

function asString(value: unknown, fallback = ''): string {
  if (value === null || value === undefined) return fallback;
  return String(value);
}

function huiduEnvelope(code: number, msg: string, payload: string) {
  return { code, msg, payload };
}

export class SeamlessCallbackService {
  async handle(prefixRaw: string, body: unknown) {
    const prefix = prefixRaw.trim().toUpperCase();
    const envelope = (body && typeof body === 'object' ? body : {}) as HuiduEnvelope;
    const timestamp = asString(envelope.timestamp);

    if (!env.GAME_UPSTREAM_AES_KEY) {
      console.error('[seamless-callback] GAME_UPSTREAM_AES_KEY is not configured');
      return huiduEnvelope(1, 'Callback not configured', '');
    }

    if (!envelope.payload) {
      return this.huiduError('Missing payload', 0, timestamp);
    }

    let gameData: GameRoundPayload;
    try {
      const decrypted = decryptAes256Ecb(envelope.payload, env.GAME_UPSTREAM_AES_KEY);
      const parsed = JSON.parse(decrypted) as GameRoundPayload;
      if (!parsed || typeof parsed !== 'object') {
        throw new Error('Invalid JSON');
      }
      gameData = parsed;
    } catch (err) {
      console.error('[seamless-callback] upstream decrypt failed', err);
      return this.huiduError('Decryption failed', 0, timestamp);
    }

    const required = [
      'serial_number',
      'member_account',
      'bet_amount',
      'win_amount',
      'currency_code',
      'timestamp',
      'game_uid',
      'game_round',
    ] as const;
    for (const field of required) {
      if (missingField(gameData[field])) {
        return this.huiduError(`Missing field: ${field}`, 0, asString(gameData.timestamp, timestamp));
      }
    }

    const memberAccount = asString(gameData.member_account);
    const memberPrefix = extractPrefixFromMemberAccount(memberAccount);
    if (memberPrefix && memberPrefix !== prefix) {
      return this.huiduError('Prefix mismatch', 0, asString(gameData.timestamp, timestamp));
    }

    const user = await User.findOne({ prefix }).select('+callbackAesKeyEncrypted');
    if (!user || user.role !== UserRole.USER) {
      return this.huiduError('Unknown agent', 0, asString(gameData.timestamp, timestamp));
    }
    if (user.status === UserStatus.PAUSE) {
      return this.huiduError('Account is paused', 0, asString(gameData.timestamp, timestamp));
    }
    if (!user.seamlessCallbackUrl) {
      return this.huiduError('Callback URL is not set', 0, asString(gameData.timestamp, timestamp));
    }
    if (!user.callbackAesKeyEncrypted) {
      return this.huiduError('Callback AES key is not set', 0, asString(gameData.timestamp, timestamp));
    }

    let operatorAesKey: string;
    try {
      operatorAesKey = decryptApiSecret(user.callbackAesKeyEncrypted);
    } catch (err) {
      console.error('[seamless-callback] operator AES decrypt failed', err);
      return this.huiduError('Callback AES key is invalid', 0, asString(gameData.timestamp, timestamp));
    }

    const operatorPayload = encryptAes256Ecb(JSON.stringify(gameData), operatorAesKey);
    const operatorBody = {
      agency_uid: user.prefix,
      timestamp: asString(gameData.timestamp, timestamp),
      payload: operatorPayload,
    };

    const forwarded = await this.forwardToOperator(user.seamlessCallbackUrl, operatorBody);
    if (!forwarded.ok || !forwarded.data) {
      return this.huiduError(
        forwarded.message,
        0,
        asString(gameData.timestamp, timestamp),
      );
    }

    const operatorCode = Number(forwarded.data.code);
    let responseInner: { credit_amount?: string; timestamp?: string };
    try {
      if (!forwarded.data.payload) {
        throw new Error('Missing payload');
      }
      const decrypted = decryptAes256Ecb(forwarded.data.payload, operatorAesKey);
      responseInner = JSON.parse(decrypted) as { credit_amount?: string; timestamp?: string };
      if (!responseInner || typeof responseInner !== 'object') {
        throw new Error('Invalid JSON');
      }
    } catch (err) {
      console.error('[seamless-callback] operator response decrypt failed', err);
      return this.huiduError(
        'Operator response decryption failed',
        0,
        asString(gameData.timestamp, timestamp),
      );
    }

    const creditAmount = asString(responseInner.credit_amount, '0');
    const responseTimestamp = asString(
      responseInner.timestamp,
      asString(gameData.timestamp, timestamp),
    );

    if (operatorCode === 0) {
      try {
        await callbackService.recordSeamlessRound({
          serial_number: asString(gameData.serial_number),
          member_account: memberAccount,
          bet_amount: Number(gameData.bet_amount) || 0,
          win_amount: Number(gameData.win_amount) || 0,
          game_uid: asString(gameData.game_uid),
          game_round: asString(gameData.game_round),
          currency_code: asString(gameData.currency_code),
          timestamp: asString(gameData.timestamp, timestamp),
          credit_amount: Number(creditAmount) || 0,
        });
      } catch (err) {
        console.error('[seamless-callback] GGR log failed', err);
      }
    }

    return huiduEnvelope(
      Number.isFinite(operatorCode) ? operatorCode : 1,
      asString(forwarded.data.msg, operatorCode === 0 ? 'Success' : 'Failed'),
      encryptAes256Ecb(
        JSON.stringify({
          credit_amount: creditAmount,
          timestamp: responseTimestamp,
        }),
        env.GAME_UPSTREAM_AES_KEY,
      ),
    );
  }

  private huiduError(message: string, balanceBefore: number, timestamp: string) {
    try {
      return huiduEnvelope(
        1,
        message,
        encryptAes256Ecb(
          JSON.stringify({
            credit_amount: String(balanceBefore),
            timestamp: String(timestamp),
          }),
          env.GAME_UPSTREAM_AES_KEY,
        ),
      );
    } catch {
      return huiduEnvelope(1, message, '');
    }
  }

  private async forwardToOperator(
    url: string,
    body: { agency_uid: string; timestamp: string; payload: string },
  ): Promise<{
    ok: boolean;
    message: string;
    data: OperatorCallbackResponse | null;
  }> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), OPERATOR_TIMEOUT_MS);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      const text = await response.text();
      let data: OperatorCallbackResponse;
      try {
        data = JSON.parse(text) as OperatorCallbackResponse;
      } catch {
        return {
          ok: false,
          message: 'Invalid operator callback response',
          data: null,
        };
      }
      if (data.payload === undefined || data.code === undefined) {
        return {
          ok: false,
          message: 'Operator callback missing code or payload',
          data: null,
        };
      }
      return { ok: true, message: asString(data.msg, 'OK'), data };
    } catch (err) {
      const aborted = err instanceof Error && err.name === 'AbortError';
      return {
        ok: false,
        message: aborted ? 'Operator callback timed out' : 'Operator callback unavailable',
        data: null,
      };
    } finally {
      clearTimeout(timer);
    }
  }
}

export const seamlessCallbackService = new SeamlessCallbackService();
