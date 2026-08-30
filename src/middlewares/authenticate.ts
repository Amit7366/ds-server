import { NextFunction, Request, Response } from 'express';
import { env } from '../config/env';
import { UserRole, UserStatus } from '../utils/constants';
import { ForbiddenError, UnauthorizedError } from '../utils/errors';
import { verifyAccessToken } from '../utils/jwt';
import { User } from '../modules/user/user.model';

function extractBearerToken(req: Request): string | null {
  const header = req.headers.authorization;
  if (header?.startsWith('Bearer ')) {
    return header.slice(7).trim();
  }
  if (req.cookies?.accessToken) {
    return String(req.cookies.accessToken);
  }
  return null;
}

export async function authenticate(req: Request, _res: Response, next: NextFunction) {
  try {
    const token = extractBearerToken(req);
    if (!token) {
      throw new UnauthorizedError('Authentication required');
    }

    const decoded = verifyAccessToken(token);

    if (!decoded.sub || !decoded.role || !decoded.email) {
      throw new UnauthorizedError('Invalid token payload');
    }

    if (!Object.values(UserRole).includes(decoded.role)) {
      throw new UnauthorizedError('Invalid token role');
    }

    const user = await User.findById(decoded.sub);

    if (!user) {
      throw new UnauthorizedError('User no longer exists');
    }

    if (user.status === UserStatus.PAUSE) {
      throw new ForbiddenError('Account is paused');
    }

    // Prevent privilege escalation via forged/stale role claims
    if (user.role !== decoded.role) {
      throw new UnauthorizedError('Token role mismatch');
    }

    if (user.email !== decoded.email) {
      throw new UnauthorizedError('Token identity mismatch');
    }

    req.user = {
      id: user._id.toString(),
      email: user.email,
      role: user.role,
      name: user.name,
    };

    return next();
  } catch (error) {
    if (error instanceof UnauthorizedError || error instanceof ForbiddenError) {
      return next(error);
    }
    return next(new UnauthorizedError('Invalid or expired token'));
  }
}

export function authenticateCallbackSecret(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const provided = String(req.headers['x-callback-secret'] ?? '').trim();
  if (!env.GAME_CALLBACK_SECRET) {
    return next(new UnauthorizedError('Callback secret is not configured'));
  }
  if (!provided || provided !== env.GAME_CALLBACK_SECRET) {
    return next(new UnauthorizedError('Invalid callback secret'));
  }
  return next();
}

export function authenticateAdminOrCron(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const provided = String(req.headers['x-cron-secret'] ?? '').trim();
  if (env.CRON_SECRET && provided && provided === env.CRON_SECRET) {
    return next();
  }

  return authenticate(req, res, (error) => {
    if (error) return next(error);
    return authorize(UserRole.SUPER_ADMIN)(req, res, next);
  });
}

export function authorize(...roles: UserRole[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new UnauthorizedError('Authentication required'));
    }

    if (!roles.includes(req.user.role)) {
      return next(new ForbiddenError('Insufficient permissions'));
    }

    return next();
  };
}
