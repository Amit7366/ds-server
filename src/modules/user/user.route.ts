import { Router } from 'express';
import { authenticate, authorize } from '../../middlewares/authenticate';
import { validate } from '../../middlewares/validate';
import { UserRole } from '../../utils/constants';
import {
  createUserSchema,
  listMyTransactionsQuerySchema,
  listUsersQuerySchema,
  updateUserSchema,
} from './user.validation';
import * as userController from './user.controller';

const router = Router();

// Every user route requires a valid JWT
router.use(authenticate);

router.get(
  '/me/profile',
  authorize(UserRole.USER, UserRole.SUPER_ADMIN),
  userController.getMyProfile,
);

router.post(
  '/me/reveal-secret',
  authorize(UserRole.USER, UserRole.SUPER_ADMIN),
  userController.revealMySecret,
);

router.get(
  '/me/transactions',
  authorize(UserRole.USER, UserRole.SUPER_ADMIN),
  validate(listMyTransactionsQuerySchema, 'query'),
  userController.listMyTransactions,
);

router.get(
  '/',
  authorize(UserRole.SUPER_ADMIN),
  validate(listUsersQuerySchema, 'query'),
  userController.listUsers,
);

router.post(
  '/',
  authorize(UserRole.SUPER_ADMIN),
  validate(createUserSchema),
  userController.createUser,
);

router.get(
  '/:id/details',
  authorize(UserRole.SUPER_ADMIN),
  userController.getUserDetails,
);

router.get('/:id', authorize(UserRole.SUPER_ADMIN), userController.getUser);

router.patch(
  '/:id',
  authorize(UserRole.SUPER_ADMIN),
  validate(updateUserSchema),
  userController.updateUser,
);

router.post(
  '/:id/regenerate-secret',
  authorize(UserRole.SUPER_ADMIN),
  userController.regenerateSecret,
);

router.post(
  '/:id/reveal-secret',
  authorize(UserRole.SUPER_ADMIN),
  userController.revealSecret,
);

export default router;
