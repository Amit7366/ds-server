import { Router } from 'express';
import { authenticate, authenticateAdminOrCron, authorize } from '../../middlewares/authenticate';
import { validate } from '../../middlewares/validate';
import { UserRole } from '../../utils/constants';
import {
  listRechargesQuerySchema,
  listSettlementsQuerySchema,
  previewSettlementSchema,
  rechargeGgrSchema,
  reportPdfQuerySchema,
  settleMonthSchema,
} from './ggrSettlement.validation';
import * as ggrSettlementController from './ggrSettlement.controller';

const router = Router();

router.post(
  '/settle-month',
  authenticateAdminOrCron,
  validate(settleMonthSchema),
  ggrSettlementController.settleMonth,
);

router.use(authenticate);

router.get('/me/latest', ggrSettlementController.getMyLatestSettlement);
router.get(
  '/me',
  validate(listSettlementsQuerySchema, 'query'),
  ggrSettlementController.listMySettlements,
);
router.get(
  '/report-pdf',
  validate(reportPdfQuerySchema, 'query'),
  ggrSettlementController.downloadReportPdf,
);
router.get('/:id/pdf', ggrSettlementController.downloadSettlementPdf);

router.use(authorize(UserRole.SUPER_ADMIN));

router.post('/auto-settle', ggrSettlementController.autoSettleDueMonths);

router.post(
  '/recharge',
  validate(rechargeGgrSchema),
  ggrSettlementController.rechargeGgr,
);

router.get(
  '/recharges',
  validate(listRechargesQuerySchema, 'query'),
  ggrSettlementController.listRecharges,
);

router.post(
  '/preview',
  validate(previewSettlementSchema),
  ggrSettlementController.previewSettlements,
);

router.get(
  '/',
  validate(listSettlementsQuerySchema, 'query'),
  ggrSettlementController.listSettlements,
);

router.get('/:id', ggrSettlementController.getSettlement);

export default router;
