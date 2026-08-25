import { Router } from 'express';
import { createRateLimiter } from '../../middlewares/rateLimit';
import { validate } from '../../middlewares/validate';
import { gameLaunchSchema, getWithdrawSchema } from './game.validation';
import {
  fetchTransactionsSchema,
  ingestTransactionsSchema,
} from './transaction.validation';
import * as gameController from './game.controller';

const router = Router();

const ingestLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 120,
  message: 'Too many ingest requests. Please try again later.',
});

router.post(
  '/gamelaunch',
  validate(gameLaunchSchema),
  gameController.gameLaunch,
);

router.post(
  '/getwithdraw',
  validate(getWithdrawSchema),
  gameController.getWithdraw,
);

router.post(
  '/transactions/ingest',
  ingestLimiter,
  validate(ingestTransactionsSchema),
  gameController.ingestTransactions,
);

router.post(
  '/transactions/fetch',
  validate(fetchTransactionsSchema),
  gameController.fetchTransactions,
);

export default router;
