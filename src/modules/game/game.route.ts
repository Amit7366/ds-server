import { Router } from 'express';
import { authenticateCallbackSecret } from '../../middlewares/authenticate';
import { createRateLimiter } from '../../middlewares/rateLimit';
import { validate } from '../../middlewares/validate';
import { gameLaunchSchema, getWithdrawSchema } from './game.validation';
import {
  fetchTransactionsSchema,
  ingestTransactionsSchema,
} from './transaction.validation';
import {
  callbackBalanceSchema,
  callbackCreditSchema,
  callbackSettleSchema,
} from './callback.validation';
import * as gameController from './game.controller';

const router = Router();

const ingestLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 120,
  message: 'Too many ingest requests. Please try again later.',
});

const callbackLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 300,
  message: 'Too many callback requests. Please try again later.',
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

router.post(
  '/callback/settle',
  callbackLimiter,
  authenticateCallbackSecret,
  validate(callbackSettleSchema),
  gameController.callbackSettle,
);

router.post(
  '/callback/balance',
  callbackLimiter,
  authenticateCallbackSecret,
  validate(callbackBalanceSchema),
  gameController.callbackBalance,
);

router.post(
  '/callback/credit',
  callbackLimiter,
  authenticateCallbackSecret,
  validate(callbackCreditSchema),
  gameController.callbackCredit,
);

export default router;
