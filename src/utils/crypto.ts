import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { env } from '../config/env';

const BCRYPT_ROUNDS = 12;
const PREFIX_LENGTH = 5;
const PREFIX_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/** Generate a cryptographically secure 5-char alphanumeric prefix */
export function generatePrefix(): string {
  const bytes = crypto.randomBytes(PREFIX_LENGTH);
  let result = '';
  for (let i = 0; i < PREFIX_LENGTH; i += 1) {
    result += PREFIX_ALPHABET[bytes[i] % PREFIX_ALPHABET.length];
  }
  return result;
}

/** Generate a 32-byte (64 hex char) HMAC API secret */
export function generateApiSecret(): string {
  return crypto.randomBytes(32).toString('hex');
}

/** Hash API secret with pepper for verification at rest */
export async function hashApiSecret(plaintext: string): Promise<string> {
  const peppered = `${plaintext}.${env.API_SECRET_PEPPER}`;
  return bcrypt.hash(peppered, BCRYPT_ROUNDS);
}

export async function verifyApiSecret(plaintext: string, hash: string): Promise<boolean> {
  const peppered = `${plaintext}.${env.API_SECRET_PEPPER}`;
  return bcrypt.compare(peppered, hash);
}

function deriveEncryptionKey(): Buffer {
  return crypto.createHash('sha256').update(env.API_SECRET_PEPPER).digest();
}

/** AES-256-GCM encrypt for admin reveal/copy (separate from hash). */
export function encryptApiSecret(plaintext: string): string {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', deriveEncryptionKey(), iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString('hex')}:${tag.toString('hex')}:${encrypted.toString('hex')}`;
}

export function decryptApiSecret(payload: string): string {
  const [ivHex, tagHex, dataHex] = payload.split(':');
  if (!ivHex || !tagHex || !dataHex) {
    throw new Error('Invalid encrypted secret format');
  }
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    deriveEncryptionKey(),
    Buffer.from(ivHex, 'hex'),
  );
  decipher.setAuthTag(Buffer.from(tagHex, 'hex'));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(dataHex, 'hex')),
    decipher.final(),
  ]);
  return decrypted.toString('utf8');
}

export function maskSecret(secret?: string | null): string {
  if (!secret) return '••••••••••••••••••••••••••••••••';
  if (secret.length < 12) return '••••••••••••••••';
  return `${secret.slice(0, 4)}${'•'.repeat(20)}${secret.slice(-4)}`;
}
