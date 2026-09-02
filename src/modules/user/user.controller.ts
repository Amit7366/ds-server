import { Request, Response } from 'express';
import { userService } from './user.service';
import { ggrSettlementService } from '../ggrSettlement/ggrSettlement.service';
import { sendCreated, sendSuccess } from '../../utils/apiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import {
  CreateUserInput,
  ListMyTransactionsQuery,
  ListUsersQuery,
  UpdateUserInput,
} from './user.validation';

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body as CreateUserInput, req.user?.id);
  return sendCreated(
    res,
    {
      user: result.user,
      apiSecret: result.apiSecret,
      callbackAesKey: result.callbackAesKey,
    },
    'User created successfully. Store the API secret and callback AES key now — they will not be shown again.',
  );
});

export const listUsers = asyncHandler(async (req: Request, res: Response) => {
  const query = (req as Request & { validatedQuery?: ListUsersQuery }).validatedQuery ??
    (req.query as unknown as ListUsersQuery);
  const result = await userService.listUsers(query);
  return sendSuccess(res, result, 'Users retrieved');
});

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id as string);
  return sendSuccess(res, { user }, 'User retrieved');
});

export const getUserDetails = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.getUserDetails(req.params.id as string);
  return sendSuccess(res, result, 'User details retrieved');
});

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.updateUser(
    req.params.id as string,
    req.body as UpdateUserInput,
  );
  return sendSuccess(res, { user }, 'User updated');
});

export const regenerateSecret = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.regenerateApiSecret(req.params.id as string);
  return sendSuccess(
    res,
    {
      user: result.user,
      apiSecret: result.apiSecret,
    },
    'API secret regenerated. Store it now — it will not be shown again.',
  );
});

export const revealSecret = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.revealApiSecret(req.params.id as string);
  return sendSuccess(
    res,
    {
      user: result.user,
      apiSecret: result.apiSecret,
      apiSecretMasked: result.apiSecretMasked,
    },
    'API secret revealed',
  );
});

export const revealMySecret = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.revealApiSecret(req.user!.id);
  return sendSuccess(
    res,
    {
      user: result.user,
      apiSecret: result.apiSecret,
      apiSecretMasked: result.apiSecretMasked,
    },
    'API secret revealed',
  );
});

export const revealAesKey = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.revealCallbackAesKey(req.params.id as string);
  return sendSuccess(
    res,
    {
      user: result.user,
      callbackAesKey: result.callbackAesKey,
      callbackAesKeyMasked: result.callbackAesKeyMasked,
    },
    'Callback AES key revealed',
  );
});

export const revealMyAesKey = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.revealCallbackAesKey(req.user!.id);
  return sendSuccess(
    res,
    {
      user: result.user,
      callbackAesKey: result.callbackAesKey,
      callbackAesKeyMasked: result.callbackAesKeyMasked,
    },
    'Callback AES key revealed',
  );
});

export const regenerateAesKey = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.regenerateCallbackAesKey(req.params.id as string);
  return sendSuccess(
    res,
    {
      user: result.user,
      callbackAesKey: result.callbackAesKey,
    },
    'Callback AES key regenerated. Store it now — in-flight seamless sessions still using the old key will fail.',
  );
});

export const getMyProfile = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.getProfile(req.user!.id);
  const lastSettlement = await ggrSettlementService.getLatestForUser(req.user!.id);
  return sendSuccess(res, { user, lastSettlement }, 'Profile retrieved');
});

export const listMyTransactions = asyncHandler(async (req: Request, res: Response) => {
  const query =
    (req as Request & { validatedQuery?: ListMyTransactionsQuery }).validatedQuery ??
    (req.query as unknown as ListMyTransactionsQuery);
  const result = await userService.listMyTransactions(req.user!.id, query);
  return sendSuccess(res, result, 'Transactions retrieved');
});
