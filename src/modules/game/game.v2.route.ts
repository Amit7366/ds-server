import { Router } from 'express';
import { createRateLimiter } from '../../middlewares/rateLimit';
import { validate } from '../../middlewares/validate';
import { gameLaunchV2Schema } from './game.validation';
import * as gameController from './game.controller';

const router = Router();

const callbackLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 600,
  message: 'Too many callback requests. Please try again later.',
});

router.post(
  '/gamelaunch',
  validate(gameLaunchV2Schema),
  gameController.gameLaunchV2,
);

router.post(
  '/callback/:prefix',
  callbackLimiter,
  gameController.seamlessCallback,
);

export default router;
