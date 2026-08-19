import { z } from 'zod';
import { ServiceType, UserCurrency, UserStatus } from '../../utils/constants';
import {
  isValidTimestampBound,
  normalizeTimestampBound,
} from '../game/timestamp-filter';

export const loginSchema = z.object({
  email: z.string().email('Valid email is required'),
  password: z.string().min(1, 'Password is required'),
});

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(128)
  .regex(/[A-Z]/, 'Password must contain an uppercase letter')
  .regex(/[a-z]/, 'Password must contain a lowercase letter')
  .regex(/[0-9]/, 'Password must contain a number');

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: passwordSchema,
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: 'New password must be different from current password',
    path: ['newPassword'],
  });

export const createUserSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().email().max(255),
  phone: z.string().trim().min(5).max(30),
  password: passwordSchema,
  whitelistDomain: z.string().trim().max(255).optional().default(''),
  whitelistIp: z.string().trim().max(255).optional().default(''),
  ggrBalance: z.coerce.number({ error: 'ggrBalance must be a number' }).min(0).optional().default(0),
  ggrDeductionPercent: z.coerce
    .number({ error: 'ggrDeductionPercent must be a number' })
    .int('ggrDeductionPercent must be an integer')
    .min(0)
    .max(100)
    .optional()
    .default(8),
  currency: z.nativeEnum(UserCurrency).optional().default(UserCurrency.BDT),
  status: z.nativeEnum(UserStatus).optional().default(UserStatus.ACTIVE),
  serviceType: z.nativeEnum(ServiceType).optional().default(ServiceType.STAGING),
  prefix: z
    .string()
    .trim()
    .length(5)
    .regex(/^[A-Za-z0-9]{5}$/, 'Prefix must be 5 alphanumeric characters')
    .transform((value) => value.toUpperCase())
    .optional(),
});

export const updateUserSchema = z
  .object({
    name: z.string().trim().min(2).max(120).optional(),
    phone: z.string().trim().min(5).max(30).optional(),
    password: passwordSchema.optional(),
    whitelistDomain: z.string().trim().max(255).optional(),
    whitelistIp: z.string().trim().max(255).optional(),
    ggrBalance: z.coerce.number({ error: 'ggrBalance must be a number' }).min(0).optional(),
    ggrDeductionPercent: z.coerce
      .number({ error: 'ggrDeductionPercent must be a number' })
      .int('ggrDeductionPercent must be an integer')
      .min(0)
      .max(100)
      .optional(),
    currency: z.nativeEnum(UserCurrency).optional(),
    status: z.nativeEnum(UserStatus).optional(),
    serviceType: z.nativeEnum(ServiceType).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided',
  });

export const listUsersQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().trim().optional().default(''),
  status: z.nativeEnum(UserStatus).optional(),
  serviceType: z.nativeEnum(ServiceType).optional(),
});

const optionalQueryString = (max: number) =>
  z.preprocess(
    (value) => {
      if (value === undefined || value === null) return undefined;
      const trimmed = String(value).trim();
      return trimmed === '' ? undefined : trimmed;
    },
    z.string().min(1).max(max).optional(),
  );

const optionalTimestampQuery = z.preprocess(
  (value) => {
    if (value === undefined || value === null) return undefined;
    const trimmed = String(value).trim();
    return trimmed === '' ? undefined : trimmed;
  },
  z
    .string()
    .min(1)
    .refine((value) => isValidTimestampBound(value), {
      message: 'Must be a valid date or datetime (e.g. 2026-08-19 or 2026-08-19 14:30:00)',
    })
    .optional(),
);

export const listMyTransactionsQuerySchema = z
  .object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
    fromDate: optionalTimestampQuery,
    toDate: optionalTimestampQuery,
    playerId: optionalQueryString(80),
  })
  .refine(
    (data) => {
      if (!data.fromDate || !data.toDate) return true;
      const from = normalizeTimestampBound(data.fromDate, 'from');
      const to = normalizeTimestampBound(data.toDate, 'to');
      return from <= to;
    },
    {
      message: 'fromDate must be before or equal to toDate',
      path: ['fromDate'],
    },
  );

export type LoginInput = z.infer<typeof loginSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type ListUsersQuery = z.infer<typeof listUsersQuerySchema>;
export type ListMyTransactionsQuery = z.infer<typeof listMyTransactionsQuerySchema>;
