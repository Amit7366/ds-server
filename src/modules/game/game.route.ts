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

const launchLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 60,
  message: 'Too many launch requests. Please try again later.',
});

const withdrawLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 60,
  message: 'Too many withdraw requests. Please try again later.',
});

const ingestLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 120,
  message: 'Too many ingest requests. Please try again later.',
});

const fetchLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 60,
  message: 'Too many fetch requests. Please try again later.',
});

router.post(
  '/gamelaunch',
  launchLimiter,
  validate(gameLaunchSchema),
  gameController.gameLaunch,
);

router.post(
  '/getwithdraw',
  withdrawLimiter,
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
  fetchLimiter,
  validate(fetchTransactionsSchema),
  gameController.fetchTransactions,
);

export default router;
