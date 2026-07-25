import { Response } from 'express';
import { env } from '../../config/env';

const isProduction = env.NODE_ENV === 'production';

/** 2 hours — aligned with JWT_ACCESS_EXPIRES / JWT_REFRESH_EXPIRES */
export const SESSION_MAX_AGE_MS = 2 * 60 * 60 * 1000;

const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: (isProduction ? 'none' : 'lax') as 'none' | 'lax',
  path: '/',
};

export function setAuthCookies(res: Response, accessToken: string, refreshToken: string) {
  res.cookie('accessToken', accessToken, {
    ...cookieOptions,
    maxAge: SESSION_MAX_AGE_MS,
  });
  res.cookie('refreshToken', refreshToken, {
    ...cookieOptions,
    maxAge: SESSION_MAX_AGE_MS,
  });
}

export function clearAuthCookies(res: Response) {
  res.clearCookie('accessToken', cookieOptions);
  res.clearCookie('refreshToken', cookieOptions);
}
