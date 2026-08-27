import { Router } from 'express';
import { authenticate, authorize } from '../../middlewares/authenticate';
import { validate } from '../../middlewares/validate';
import { UserRole } from '../../utils/constants';
import {
  createGameSchema,
  gameIdParamSchema,
  listGamesQuerySchema,
  updateGameSchema,
} from './gameCatalogue.validation';
import * as gameCatalogueController from './gameCatalogue.controller';

const router = Router();

router.use(authenticate);
router.use(authorize(UserRole.SUPER_ADMIN));

router.get(
  '/',
  validate(listGamesQuerySchema, 'query'),
  gameCatalogueController.listGames,
);

router.get('/filters', gameCatalogueController.listGameFilters);

router.post('/', validate(createGameSchema), gameCatalogueController.createGame);

router.get(
  '/:id',
  validate(gameIdParamSchema, 'params'),
  gameCatalogueController.getGame,
);

router.patch(
  '/:id',
  validate(gameIdParamSchema, 'params'),
  validate(updateGameSchema),
  gameCatalogueController.updateGame,
);

router.delete(
  '/:id',
  validate(gameIdParamSchema, 'params'),
  gameCatalogueController.deleteGame,
);

export default router;
