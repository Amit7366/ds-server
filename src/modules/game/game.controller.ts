import { Request, Response } from 'express';
import { asyncHandler } from '../../utils/asyncHandler';
import { sendSuccess } from '../../utils/apiResponse';
import { gameService } from './game.service';
import { transactionService } from './transaction.service';
import { GameLaunchInput, GetWithdrawInput } from './game.validation';
import {
  FetchTransactionsInput,
  IngestTransactionsInput,
} from './transaction.validation';

export const gameLaunch = asyncHandler(async (req: Request, res: Response) => {
  const data = await gameService.launch(req.body as GameLaunchInput);
  return sendSuccess(res, data, 'Game launch ready');
});

export const getWithdraw = asyncHandler(async (req: Request, res: Response) => {
  const data = await gameService.getWithdraw(req.body as GetWithdrawInput);
  return sendSuccess(res, data, 'Withdraw successful');
});

export const ingestTransactions = asyncHandler(async (req: Request, res: Response) => {
  const data = await transactionService.ingest(req.body as IngestTransactionsInput);
  return sendSuccess(res, data, 'Transactions ingested');
});

export const fetchTransactions = asyncHandler(async (req: Request, res: Response) => {
  const data = await transactionService.fetchForUser(req.body as FetchTransactionsInput);
  return sendSuccess(res, data, 'Transactions fetched');
});
