import { Router } from 'express';
import { authenticate, authorize } from '../../middlewares/authenticate';
import { validate } from '../../middlewares/validate';
import { UserRole } from '../../utils/constants';
import {
  createQuotationSchema,
  listQuotationsQuerySchema,
  quotationIdParamSchema,
  updateQuotationSchema,
} from './apiQuotation.validation';
import * as apiQuotationController from './apiQuotation.controller';

const router = Router();

router.use(authenticate);
router.use(authorize(UserRole.SUPER_ADMIN));

router.get(
  '/',
  validate(listQuotationsQuerySchema, 'query'),
  apiQuotationController.listQuotations,
);

router.get('/filters', apiQuotationController.listQuotationFilters);

router.post('/', validate(createQuotationSchema), apiQuotationController.createQuotation);

router.get(
  '/:id',
  validate(quotationIdParamSchema, 'params'),
  apiQuotationController.getQuotation,
);

router.patch(
  '/:id',
  validate(quotationIdParamSchema, 'params'),
  validate(updateQuotationSchema),
  apiQuotationController.updateQuotation,
);

router.delete(
  '/:id',
  validate(quotationIdParamSchema, 'params'),
  apiQuotationController.deleteQuotation,
);

export default router;
