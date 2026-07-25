import { Request } from 'express';
import { UserRole } from '../utils/constants';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthUser;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export {};
