import rateLimit, { ipKeyGenerator } from 'express-rate-limit';
import type { Request } from 'express';

function firstAddress(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const first = value.split(',')[0]?.trim();
  if (!first || first === '-') return undefined;
  return first;
}

/** Real client IP when Express sits behind Nginx and/or the Next.js proxy. */
export function clientIp(req: Request): string {
  const cf = firstAddress(req.get('cf-connecting-ip'));
  if (cf) return cf;

  const real = firstAddress(req.get('x-real-ip'));
  if (real) return real;

  const forwarded = firstAddress(req.get('x-forwarded-for'));
  if (forwarded) return forwarded;

  return req.ip || req.socket.remoteAddress || 'unknown';
}

function isLoopback(ip: string): boolean {
  return ip === '127.0.0.1' || ip === '::1' || ip === '::ffff:127.0.0.1';
}

type LimiterOptions = {
  windowMs: number;
  max: number;
  message: string;
  skipSuccessfulRequests?: boolean;
  skip?: (req: Request) => boolean;
};

export function createRateLimiter(options: LimiterOptions) {
  return rateLimit({
    windowMs: options.windowMs,
    max: options.max,
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: options.skipSuccessfulRequests ?? false,
    message: {
      success: false,
      message: options.message,
    },
    skip: (req) => isLoopback(clientIp(req)) || Boolean(options.skip?.(req)),
    keyGenerator: (req) => {
      const ip = clientIp(req);
      try {
        return ipKeyGenerator(ip);
      } catch {
        return ip;
      }
    },
    validate: {
      xForwardedForHeader: false,
      keyGeneratorIpFallback: false,
    },
  });
}
