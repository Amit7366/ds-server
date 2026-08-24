import { Router } from 'express';
import { authenticate } from '../../middlewares/authenticate';
import { createRateLimiter } from '../../middlewares/rateLimit';
import { validate } from '../../middlewares/validate';
import { changePasswordSchema, loginSchema } from '../user/user.validation';
import * as authController from './auth.controller';

const router = Router();

const loginLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 20,
  skipSuccessfulRequests: true,
  message: 'Too many login attempts. Please try again later.',
});

const refreshLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 60,
  message: 'Too many refresh attempts. Please sign in again.',
});

const changePasswordLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 20,
  skipSuccessfulRequests: true,
  message: 'Too many password change attempts. Please try again later.',
});

router.post('/login', loginLimiter, validate(loginSchema), authController.login);
router.post('/refresh', refreshLimiter, authController.refresh);
router.post('/logout', authenticate, authController.logout);
router.get('/me', authenticate, authController.me);
router.post(
  '/change-password',
  authenticate,
  changePasswordLimiter,
  validate(changePasswordSchema),
  authController.changePassword,
);

export default router;
