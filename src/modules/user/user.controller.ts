import { Request, Response } from 'express';
import { userService } from './user.service';
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
    },
    'User created successfully. Store the API secret now — it will not be shown again.',
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

export const getMyProfile = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.getProfile(req.user!.id);
  return sendSuccess(res, { user }, 'Profile retrieved');
});

export const listMyTransactions = asyncHandler(async (req: Request, res: Response) => {
  const query =
    (req as Request & { validatedQuery?: ListMyTransactionsQuery }).validatedQuery ??
    (req.query as unknown as ListMyTransactionsQuery);
  const result = await userService.listMyTransactions(req.user!.id, query);
  return sendSuccess(res, result, 'Transactions retrieved');
});
