import { Request, Response } from 'express';
import { gameCatalogueService } from './gameCatalogue.service';
import { sendCreated, sendSuccess } from '../../utils/apiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import { CreateGameInput, ListGamesQuery, UpdateGameInput } from './gameCatalogue.validation';

export const listGames = asyncHandler(async (req: Request, res: Response) => {
  const query =
    (req as Request & { validatedQuery?: ListGamesQuery }).validatedQuery ??
    (req.query as unknown as ListGamesQuery);
  const result = await gameCatalogueService.listGames(query);
  return sendSuccess(res, result, 'Games retrieved');
});

export const listGameFilters = asyncHandler(async (_req: Request, res: Response) => {
  const result = await gameCatalogueService.listFilters();
  return sendSuccess(res, result, 'Game filters retrieved');
});

export const getGame = asyncHandler(async (req: Request, res: Response) => {
  const game = await gameCatalogueService.getGameById(req.params.id as string);
  return sendSuccess(res, { game }, 'Game retrieved');
});

export const createGame = asyncHandler(async (req: Request, res: Response) => {
  const game = await gameCatalogueService.createGame(req.body as CreateGameInput);
  return sendCreated(res, { game }, 'Game created');
});

export const updateGame = asyncHandler(async (req: Request, res: Response) => {
  const game = await gameCatalogueService.updateGame(
    req.params.id as string,
    req.body as UpdateGameInput,
  );
  return sendSuccess(res, { game }, 'Game updated');
});

export const deleteGame = asyncHandler(async (req: Request, res: Response) => {
  const game = await gameCatalogueService.deleteGame(req.params.id as string);
  return sendSuccess(res, { game }, 'Game deleted');
});
