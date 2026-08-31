import { Router } from 'express';
import { validate } from '../../middlewares/validate';
import { gameLaunchV2Schema } from './game.validation';
import * as gameController from './game.controller';

const router = Router();

router.post(
  '/gamelaunch',
  validate(gameLaunchV2Schema),
  gameController.gameLaunchV2,
);

export default router;
