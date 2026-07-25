import { Request, Response } from 'express';
import { asyncHandler } from '../../utils/asyncHandler';
import { sendSuccess } from '../../utils/apiResponse';
import { gameService } from './game.service';
import { GameLaunchInput } from './game.validation';

export const gameLaunch = asyncHandler(async (req: Request, res: Response) => {
  const data = await gameService.launch(req.body as GameLaunchInput);
  return sendSuccess(res, data, 'Game launch ready');
});
