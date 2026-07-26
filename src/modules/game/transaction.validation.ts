import { z } from 'zod';

const amountField = z.preprocess(
  (v) => (v === undefined || v === null ? '0' : String(v)),
  z.string(),
);

export const gameTransactionRecordSchema = z.object({
  agency_uid: z.string().trim().min(1, 'agency_uid is required'),
  serial_number: z.string().trim().min(1, 'serial_number is required'),
  currency_code: z.string().trim().min(1).default('BDT'),
  game_uid: z.string().trim().min(1, 'game_uid is required'),
  member_account: z.string().trim().min(1, 'member_account is required'),
  bet_amount: amountField,
  win_amount: amountField,
  timestamp: z.string().trim().min(1, 'timestamp is required'),
  game_round: z.preprocess(
    (v) => (v === undefined || v === null ? '' : String(v)),
    z.string(),
  ),
});

export const ingestTransactionsSchema = z.object({
  records: z
    .array(gameTransactionRecordSchema)
    .min(1, 'records must contain at least one item')
    .max(500, 'records cannot exceed 500 items per request'),
});

export const fetchTransactionsSchema = z.object({
  apiSecret: z.string().min(1, 'apiSecret is required'),
  prefix: z
    .string()
    .trim()
    .length(5, 'prefix must be 5 characters')
    .transform((v) => v.toUpperCase()),
  fromDate: z.string().trim().min(1).optional(),
  toDate: z.string().trim().min(1).optional(),
  member_account: z.string().trim().min(1).optional(),
  game_uid: z.string().trim().min(1).optional(),
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(200).optional().default(50),
});

export type GameTransactionRecordInput = z.infer<typeof gameTransactionRecordSchema>;
export type IngestTransactionsInput = z.infer<typeof ingestTransactionsSchema>;
export type FetchTransactionsInput = z.infer<typeof fetchTransactionsSchema>;

/** Derive user prefix from member_account suffix (h037ad{playerId}{PREFIX}). */
export function extractPrefixFromMemberAccount(memberAccount: string): string {
  const trimmed = memberAccount.trim();
  if (trimmed.length < 5) return '';
  const suffix = trimmed.slice(-5);
  return /^[A-Za-z0-9]{5}$/.test(suffix) ? suffix.toUpperCase() : '';
}
