import { z } from 'zod';

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

export const gameLaunchSchema = z.object({
  apiSecret: z.string().min(1, 'apiSecret is required'),
  prefix: z
    .string()
    .trim()
    .length(5, 'prefix must be 5 characters')
    .transform((v) => v.toUpperCase()),
  /** Maps to upstream `game_uid` */
  gameCode: z.string().trim().min(1, 'gameCode is required'),
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
  /** Upstream expects timestamp as string (ms). Accept number or string. */
  timestamp: z.preprocess((v) => {
    if (v === undefined || v === null || v === '') return String(Date.now());
    return String(v);
  }, z.string().min(1)),
  transfer_id: z.preprocess((v) => {
    if (v === undefined || v === null || v === '') {
      return `tx_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
    }
    return v;
  }, z.string().trim().min(1)),
});

export type GameLaunchInput = z.infer<typeof gameLaunchSchema>;

/** Payload shape required by https://txserver.site/testGameLaunch.php */
export type TxGameLaunchBody = {
  member_account: string;
  game_uid: string;
  credit_amount: number;
  currency_code: string;
  language: string;
  platform: number;
  home_url: string;
  timestamp: string;
  transfer_id: string;
};

const MEMBER_ACCOUNT_PREFIX = 'h037ad';

export function toTxGameLaunchBody(input: GameLaunchInput): TxGameLaunchBody {
  const playerId = input.playerId.trim();
  const member_account = playerId.startsWith(MEMBER_ACCOUNT_PREFIX)
    ? playerId
    : `${MEMBER_ACCOUNT_PREFIX}${playerId}`;

  return {
    member_account,
    game_uid: input.gameCode,
    credit_amount: input.balance,
    currency_code: input.currencyCode,
    language: input.language,
    platform: input.platform,
    home_url: input.homeUrl,
    timestamp: input.timestamp,
    transfer_id: input.transfer_id,
  };
}
