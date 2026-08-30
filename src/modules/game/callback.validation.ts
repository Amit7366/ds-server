import { z } from 'zod';

const amountField = z.preprocess(
  (v) => (v === undefined || v === null || v === '' ? 0 : v),
  z.coerce.number({ error: 'amount must be a number' }),
);

export const callbackSettleSchema = z.object({
  serial_number: z.string().trim().min(1, 'serial_number is required'),
  member_account: z.string().trim().min(1, 'member_account is required'),
  bet_amount: amountField,
  win_amount: amountField,
  currency_code: z.string().trim().min(1).default('BDT'),
  timestamp: z.string().trim().min(1, 'timestamp is required'),
  game_uid: z.string().trim().min(1, 'game_uid is required'),
  game_round: z.preprocess(
    (v) => (v === undefined || v === null ? '' : String(v)),
    z.string(),
  ),
});

export const callbackBalanceSchema = z.object({
  member_account: z.string().trim().min(1, 'member_account is required'),
  currency_code: z.string().trim().min(1).default('BDT'),
});

export const callbackCreditSchema = z.object({
  member_account: z.string().trim().min(1, 'member_account is required'),
  currency_code: z.string().trim().min(1).default('BDT'),
  balance: z.preprocess(
    (v) => (v === undefined || v === null || v === '' ? 0 : v),
    z.coerce.number({ error: 'balance must be a number' }).min(0, 'balance cannot be negative'),
  ),
});

export type CallbackSettleInput = z.infer<typeof callbackSettleSchema>;
export type CallbackBalanceInput = z.infer<typeof callbackBalanceSchema>;
export type CallbackCreditInput = z.infer<typeof callbackCreditSchema>;
