import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(5001),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  MONGODB_URI: z.string().min(1, 'MONGODB_URI is required'),
  MONGODB_DB_NAME: z.string().min(1).default('user_dashboard'),
  JWT_ACCESS_SECRET: z.string().min(32, 'JWT_ACCESS_SECRET must be at least 32 characters'),
  JWT_REFRESH_SECRET: z.string().min(32, 'JWT_REFRESH_SECRET must be at least 32 characters'),
  JWT_ACCESS_EXPIRES: z.string().default('15m'),
  JWT_REFRESH_EXPIRES: z.string().default('7d'),
  SUPER_ADMIN_EMAIL: z.string().email().default('superadmin@system.local'),
  SUPER_ADMIN_PASSWORD: z.string().min(8).default('SuperAdmin@123'),
  SUPER_ADMIN_NAME: z.string().default('Super Admin'),
  CLIENT_ORIGIN: z.string().url().default('http://localhost:3000'),
  API_SECRET_PEPPER: z.string().min(16, 'API_SECRET_PEPPER must be at least 16 characters'),
  GAME_LAUNCH_UPSTREAM_URL: z
    .string()
    .url()
    .default('https://txserver.site/tgamelaunch.php'),
  GAME_LAUNCH_AGENCY_UID: z
    .string()
    .trim()
    .min(1, 'GAME_LAUNCH_AGENCY_UID is required')
    .default('0b98f74aa493413ce882a9edef9f9ede'),
  GAME_LAUNCH_V2_UPSTREAM_URL: z
    .string()
    .url()
    .default('https://txserver.site/tgamelaunchv2.php'),
  GAME_LAUNCH_V2_AGENCY_UID: z
    .string()
    .trim()
    .min(1, 'GAME_LAUNCH_V2_AGENCY_UID is required')
    .default('0b98f74aa493413ce882a9edef9f9ede'),
  GET_WITHDRAW_UPSTREAM_URL: z
    .string()
    .url()
    .default('https://txserver.site/tgetwithdraw.php'),
  GET_WITHDRAW_AGENCY_UID: z
    .string()
    .trim()
    .min(1, 'GET_WITHDRAW_AGENCY_UID is required')
    .default('d5806564bab3b30e0eba2148ebb8e7bd'),
  CRON_SECRET: z.string().trim().optional().default(''),
  GAME_CALLBACK_SECRET: z.string().trim().optional().default(''),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Invalid environment configuration:');
  console.error(parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsed.data;
