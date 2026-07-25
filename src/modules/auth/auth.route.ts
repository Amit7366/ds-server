import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { authenticate } from '../../middlewares/authenticate';
import { validate } from '../../middlewares/validate';
import { loginSchema } from '../user/user.validation';
import * as authController from './auth.controller';

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many login attempts. Please try again later.',
  },
});

const refreshLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many refresh attempts. Please sign in again.',
  },
});

router.post('/login', loginLimiter, validate(loginSchema), authController.login);
router.post('/refresh', refreshLimiter, authController.refresh);
router.post('/logout', authenticate, authController.logout);
router.get('/me', authenticate, authController.me);

export default router;
