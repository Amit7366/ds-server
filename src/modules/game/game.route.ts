import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { validate } from '../../middlewares/validate';
import { gameLaunchSchema } from './game.validation';
import * as gameController from './game.controller';

const router = Router();

const launchLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many launch requests. Please try again later.',
  },
});

router.post(
  '/gamelaunch',
  launchLimiter,
  validate(gameLaunchSchema),
  gameController.gameLaunch,
);

export default router;
