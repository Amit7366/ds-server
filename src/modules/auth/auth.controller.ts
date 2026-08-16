import { Request, Response } from 'express';
import { authService } from './auth.service';
import { clearAuthCookies, setAuthCookies } from './auth.cookies';
import { sendSuccess } from '../../utils/apiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import { ChangePasswordInput, LoginInput } from '../user/user.validation';
import { UnauthorizedError } from '../../utils/errors';

export const login = asyncHandler(async (req: Request, res: Response) => {
  const result = await authService.login(req.body as LoginInput);
  setAuthCookies(res, result.accessToken, result.refreshToken);
  return sendSuccess(
    res,
    {
      user: result.user,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    },
    'Login successful',
  );
});

export const refresh = asyncHandler(async (req: Request, res: Response) => {
  const token =
    (req.cookies?.refreshToken as string | undefined) ||
    (req.body?.refreshToken as string | undefined);

  if (!token) {
    throw new UnauthorizedError('Refresh token required');
  }

  const result = await authService.refresh(token);
  setAuthCookies(res, result.accessToken, result.refreshToken);
  return sendSuccess(
    res,
    {
      user: result.user,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    },
    'Token refreshed',
  );
});

export const logout = asyncHandler(async (req: Request, res: Response) => {
  if (req.user?.id) {
    await authService.logout(req.user.id);
  }
  clearAuthCookies(res);
  return sendSuccess(res, null, 'Logged out');
});

export const me = asyncHandler(async (req: Request, res: Response) => {
  const user = await authService.me(req.user!.id);
  return sendSuccess(res, { user }, 'Current user');
});

export const changePassword = asyncHandler(async (req: Request, res: Response) => {
  await authService.changePassword(req.user!.id, req.body as ChangePasswordInput);
  clearAuthCookies(res);
  return sendSuccess(res, null, 'Password updated. Please sign in again.');
});
