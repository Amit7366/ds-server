import crypto from 'crypto';

/** Match PHP: str_pad($key, 32, "\\0") then AES-256-ECB + Base64. */
function padKey(key: string): Buffer {
  const buf = Buffer.alloc(32, 0);
  Buffer.from(key, 'utf8').copy(buf, 0, 0, Math.min(Buffer.byteLength(key, 'utf8'), 32));
  return buf;
}

export function encryptAes256Ecb(plain: string, key: string): string {
  const cipher = crypto.createCipheriv('aes-256-ecb', padKey(key), null);
  cipher.setAutoPadding(true);
  const encrypted = Buffer.concat([cipher.update(plain, 'utf8'), cipher.final()]);
  return encrypted.toString('base64');
}

export function decryptAes256Ecb(payload: string, key: string): string {
  const decipher = crypto.createDecipheriv('aes-256-ecb', padKey(key), null);
  decipher.setAutoPadding(true);
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(payload, 'base64')),
    decipher.final(),
  ]);
  return decrypted.toString('utf8');
}

export function isAes256EcbPayload(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}
