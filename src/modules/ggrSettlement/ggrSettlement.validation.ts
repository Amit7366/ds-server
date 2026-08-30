import { z } from 'zod';

export const monthSchema = z
  .string()
  .trim()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'month must be YYYY-MM');

export const previewSettlementSchema = z.object({
  month: monthSchema,
  userId: z.string().trim().min(1).optional(),
});

export const settleMonthSchema = z.object({
  month: monthSchema.optional(),
  userId: z.string().trim().min(1).optional(),
  force: z.boolean().optional().default(false),
});

export const listSettlementsQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  month: z.string().trim().optional().default(''),
  search: z.string().trim().optional().default(''),
  userId: z.string().trim().optional().default(''),
});

export const reportPdfQuerySchema = z.object({
  month: monthSchema,
  userId: z.string().trim().min(1).optional(),
  download: z.string().optional(),
});

export const rechargeGgrSchema = z.object({
  userId: z.string().trim().min(1),
  amount: z.coerce.number().positive('amount must be greater than 0').max(1_000_000_000),
  note: z.string().trim().max(500).optional().default(''),
});

export const listRechargesQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  userId: z.string().trim().optional().default(''),
  search: z.string().trim().optional().default(''),
});

export type PreviewSettlementInput = z.infer<typeof previewSettlementSchema>;
export type SettleMonthInput = z.infer<typeof settleMonthSchema>;
export type ListSettlementsQuery = z.infer<typeof listSettlementsQuerySchema>;
export type ReportPdfQuery = z.infer<typeof reportPdfQuerySchema>;
export type RechargeGgrInput = z.infer<typeof rechargeGgrSchema>;
export type ListRechargesQuery = z.infer<typeof listRechargesQuerySchema>;
