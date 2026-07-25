import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import { env } from '../config/env';
import { UserRole } from './constants';

export interface TokenPayload {
  sub: string;
  role: UserRole;
  email: string;
}

export type DecodedToken = JwtPayload & TokenPayload;

export function signAccessToken(payload: TokenPayload): string {
  const options: SignOptions = {
    expiresIn: env.JWT_ACCESS_EXPIRES as SignOptions['expiresIn'],
  };
  return jwt.sign(payload, env.JWT_ACCESS_SECRET, options);
}

export function signRefreshToken(payload: TokenPayload): string {
  const options: SignOptions = {
    expiresIn: env.JWT_REFRESH_EXPIRES as SignOptions['expiresIn'],
  };
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, options);
}

export function verifyAccessToken(token: string): DecodedToken {
  return jwt.verify(token, env.JWT_ACCESS_SECRET) as DecodedToken;
}

export function verifyRefreshToken(token: string): DecodedToken {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as DecodedToken;
}
