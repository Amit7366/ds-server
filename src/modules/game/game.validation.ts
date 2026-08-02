import { z } from 'zod';
import { env } from '../../config/env';

/** Accept JSON numbers or numeric strings (common from Postman / form clients). */
const optionalNumber = (label: string, fallback: number) =>
  z.preprocess(
    (v) => (v === undefined || v === null || v === '' ? fallback : v),
    z.coerce.number({ error: `${label} must be a number` }),
  );

const optionalString = (fallback: string) =>
  z.preprocess(
    (v) => (v === undefined || v === null || v === '' ? fallback : v),
    z.string().trim().min(1),
  );

/** Normalize partner timestamp (ms number/string or ISO) to upstream ISO-8601 UTC. */
export function toUpstreamTimestamp(value: unknown): string {
  if (value === undefined || value === null || value === '') {
    return new Date().toISOString();
  }

  if (typeof value === 'number' && Number.isFinite(value)) {
    return new Date(value).toISOString();
  }

  const raw = String(value).trim();
  if (/^\d+$/.test(raw)) {
    return new Date(Number(raw)).toISOString();
  }

  const parsed = Date.parse(raw);
  if (!Number.isNaN(parsed)) {
    return new Date(parsed).toISOString();
  }

  return new Date().toISOString();
}

// const MEMBER_ACCOUNT_PREFIX = 'h037ad';
const MEMBER_ACCOUNT_PREFIX = 'h94044';

/** Build provider member_account: h94044 + playerId + account prefix (hidden from partners). */
export function buildMemberAccount(playerId: string, prefix: string): string {
  const trimmedPlayer = playerId.trim();
  const userPrefix = prefix.trim().toUpperCase();

  let member_account = trimmedPlayer.startsWith(MEMBER_ACCOUNT_PREFIX)
    ? trimmedPlayer
    : `${MEMBER_ACCOUNT_PREFIX}${trimmedPlayer}`;

  if (userPrefix && !member_account.endsWith(userPrefix)) {
    member_account = `${member_account}${userPrefix}`;
  }

  return member_account;
}

/** Strip provider prefix + account prefix for partner-facing responses. */
export function toPublicPlayerId(memberAccount: string, prefix: string): string {
  let value = memberAccount.trim();
  const userPrefix = prefix.trim().toUpperCase();

  if (value.toLowerCase().startsWith(MEMBER_ACCOUNT_PREFIX)) {
    value = value.slice(MEMBER_ACCOUNT_PREFIX.length);
  }

  if (userPrefix && value.toUpperCase().endsWith(userPrefix)) {
    value = value.slice(0, -userPrefix.length);
  }

  return value;
}

const credentialsSchema = {
  apiSecret: z.string().min(1, 'apiSecret is required'),
  prefix: z
    .string()
    .trim()
    .length(5, 'prefix must be 5 characters')
    .transform((v) => v.toUpperCase()),
};

const sharedSessionFields = {
  /** Maps to upstream `member_account` */
  playerId: z.string().trim().min(1, 'playerId is required'),
  /** Maps to upstream `credit_amount` (default 0) */
  balance: optionalNumber('balance', 0),
  /** Maps to upstream `currency_code` (default BDT) */
  currencyCode: optionalString('BDT'),
  language: optionalString('en'),
  /** Maps to upstream `home_url` */
  homeUrl: z.preprocess(
    (v) => (v === undefined || v === null || v === '' ? 'http://localhost:3000' : v),
    z.string().trim().url('homeUrl must be a valid URL'),
  ),
  platform: optionalNumber('platform', 1),
  /** Partner may send ms or ISO; converted to ISO-8601 for upstream. */
  timestamp: z.preprocess((v) => toUpstreamTimestamp(v), z.string().min(1)),
  transfer_id: z.preprocess((v) => {
    if (v === undefined || v === null || v === '') {
      return `tx_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
    }
    return v;
  }, z.string().trim().min(1)),
};

export const gameLaunchSchema = z.object({
  ...credentialsSchema,
  /** Maps to upstream `game_uid` */
  gameCode: z.string().trim().min(1, 'gameCode is required'),
  ...sharedSessionFields,
});

export type GameLaunchInput = z.infer<typeof gameLaunchSchema>;

/** Payload shape required by https://txserver.site/tgamelaunch.php */
export type TxGameLaunchBody = {
  agency_uid: string;
  member_account: string;
  game_uid: string;
  credit_amount: number;
  currency_code: string;
  language: string;
  /** Upstream expects platform as a string (e.g. "2"). */
  platform: string;
  home_url: string;
  /** ISO-8601 UTC, e.g. 2026-07-28T17:47:00.000Z */
  timestamp: string;
  transfer_id: string;
};

export function toTxGameLaunchBody(input: GameLaunchInput): TxGameLaunchBody {
  return {
    agency_uid: env.GAME_LAUNCH_AGENCY_UID,
    member_account: buildMemberAccount(input.playerId, input.prefix),
    game_uid: input.gameCode,
    credit_amount: input.balance,
    currency_code: input.currencyCode,
    language: input.language,
    platform: String(input.platform),
    home_url: input.homeUrl,
    timestamp: input.timestamp,
    transfer_id: input.transfer_id,
  };
}

export const getWithdrawSchema = z.object({
  ...credentialsSchema,
  ...sharedSessionFields,
});

export type GetWithdrawInput = z.infer<typeof getWithdrawSchema>;

/** Payload shape required by https://txserver.site/tgetwithdraw.php */
export type TxGetWithdrawBody = {
  agency_uid: string;
  member_account: string;
  credit_amount: number;
  currency_code: string;
  language: string;
  platform: string;
  home_url: string;
  timestamp: string;
  transfer_id: string;
};

export function toTxGetWithdrawBody(input: GetWithdrawInput): TxGetWithdrawBody {
  return {
    agency_uid: env.GET_WITHDRAW_AGENCY_UID,
    member_account: buildMemberAccount(input.playerId, input.prefix),
    credit_amount: input.balance,
    currency_code: input.currencyCode,
    language: input.language,
    platform: String(input.platform),
    home_url: input.homeUrl,
    timestamp: input.timestamp,
    transfer_id: input.transfer_id,
  };
}
