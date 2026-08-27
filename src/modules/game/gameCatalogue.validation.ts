import { z } from 'zod';

const optionalTrimmed = (max: number) => z.string().trim().max(max).optional();

const requiredCode = z.string().trim().min(1, 'Required').max(120);
const gameTypeSchema = z.string().trim().min(1).max(40);

export const createGameSchema = z
  .object({
    title: optionalTrimmed(180),
    game_name: optionalTrimmed(180),
    gameCode: requiredCode,
    provider: z.string().trim().min(1, 'Provider is required').max(80),
    game_type: gameTypeSchema,
    image: optionalTrimmed(2000),
    game_image: optionalTrimmed(2000),
    glow: optionalTrimmed(32),
    gradient: optionalTrimmed(160),
    sortOrder: z.coerce.number().int().min(0).max(1_000_000).optional().default(0),
    vendorCode: optionalTrimmed(80),
    tileId: optionalTrimmed(200),
    providerLabel: optionalTrimmed(80),
    types: z.array(z.string().trim().min(1).max(40)).max(10).optional(),
  })
  .refine((data) => Boolean(data.title?.trim() || data.game_name?.trim()), {
    message: 'title or game_name is required',
    path: ['title'],
  });

export const updateGameSchema = z
  .object({
    title: optionalTrimmed(180),
    game_name: optionalTrimmed(180),
    gameCode: z.string().trim().min(1).max(120).optional(),
    provider: z.string().trim().min(1).max(80).optional(),
    game_type: z.string().trim().min(1).max(40).optional(),
    image: optionalTrimmed(2000),
    game_image: optionalTrimmed(2000),
    glow: optionalTrimmed(32),
    gradient: optionalTrimmed(160),
    sortOrder: z.coerce.number().int().min(0).max(1_000_000).optional(),
    vendorCode: optionalTrimmed(80),
    tileId: optionalTrimmed(200),
    providerLabel: optionalTrimmed(80),
    types: z.array(z.string().trim().min(1).max(40)).max(10).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided',
  });

export const listGamesQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().trim().optional().default(''),
  provider: z.string().trim().max(80).optional().default(''),
  game_type: z.string().trim().max(40).optional().default(''),
});

export const gameIdParamSchema = z.object({
  id: z.string().trim().min(1),
});

export type CreateGameInput = z.infer<typeof createGameSchema>;
export type UpdateGameInput = z.infer<typeof updateGameSchema>;
export type ListGamesQuery = z.infer<typeof listGamesQuerySchema>;
