import { z } from 'zod';

const optionalTrimmed = (max: number) => z.string().trim().max(max).optional();

export const QUOTATION_RATE_MODES = ['percent', 'surcharge'] as const;

const rateTierSchema = z.object({
  under10k: z.coerce.number().min(0).max(100),
  from10kTo1M: z.coerce.number().min(0).max(100),
  over1M: z.coerce.number().min(0).max(100),
});

const currencyOverrideSchema = z.object({
  currencies: z.array(z.string().trim().min(1).max(12)).max(40).optional().default([]),
  label: optionalTrimmed(160).default(''),
  under10k: z.coerce.number().min(0).max(100),
  from10kTo1M: z.coerce.number().min(0).max(100),
  over1M: z.coerce.number().min(0).max(100),
});

export const createQuotationSchema = z.object({
  supplier: z.string().trim().min(1, 'Supplier is required').max(120),
  type: z.string().trim().min(1, 'Type is required').max(80),
  currency: z.string().trim().min(1).max(12).optional().default('USD'),
  rateMode: z.enum(QUOTATION_RATE_MODES).optional().default('percent'),
  asia: rateTierSchema,
  row: rateTierSchema.nullable().optional().default(null),
  specialInstructions: optionalTrimmed(2000).default(''),
  currencyOverrides: z.array(currencyOverrideSchema).max(40).optional().default([]),
  providerKeys: z.array(z.string().trim().min(1).max(80)).max(40).optional().default([]),
  sortOrder: z.coerce.number().int().min(0).max(1_000_000).optional().default(0),
});

export const updateQuotationSchema = z
  .object({
    supplier: z.string().trim().min(1).max(120).optional(),
    type: z.string().trim().min(1).max(80).optional(),
    currency: z.string().trim().min(1).max(12).optional(),
    rateMode: z.enum(QUOTATION_RATE_MODES).optional(),
    asia: rateTierSchema.optional(),
    row: rateTierSchema.nullable().optional(),
    specialInstructions: optionalTrimmed(2000),
    currencyOverrides: z.array(currencyOverrideSchema).max(40).optional(),
    providerKeys: z.array(z.string().trim().min(1).max(80)).max(40).optional(),
    sortOrder: z.coerce.number().int().min(0).max(1_000_000).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided',
  });

export const listQuotationsQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().trim().optional().default(''),
  type: z.string().trim().max(80).optional().default(''),
});

export const quotationIdParamSchema = z.object({
  id: z.string().trim().min(1),
});

export type CreateQuotationInput = z.infer<typeof createQuotationSchema>;
export type UpdateQuotationInput = z.infer<typeof updateQuotationSchema>;
export type ListQuotationsQuery = z.infer<typeof listQuotationsQuerySchema>;
