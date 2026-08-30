import { Request, Response } from 'express';
import { sendSuccess } from '../../utils/apiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import { ggrRechargeService } from './ggrRecharge.service';
import { ggrSettlementService } from './ggrSettlement.service';
import {
  ListRechargesQuery,
  ListSettlementsQuery,
  PreviewSettlementInput,
  RechargeGgrInput,
  SettleMonthInput,
} from './ggrSettlement.validation';
import { previousCalendarMonth } from './ggrSettlement.rates';

export const previewSettlements = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body as PreviewSettlementInput;
  const result = await ggrSettlementService.preview(body.month, body.userId);
  return sendSuccess(res, result, 'Settlement preview computed');
});

export const settleMonth = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body as SettleMonthInput;
  const result = await ggrSettlementService.settle({
    month: body.month || previousCalendarMonth(),
    userId: body.userId,
    force: body.force,
  });
  return sendSuccess(res, result, 'Monthly GGR settlement completed');
});

export const listSettlements = asyncHandler(async (req: Request, res: Response) => {
  const query =
    (req as Request & { validatedQuery?: ListSettlementsQuery }).validatedQuery ??
    (req.query as unknown as ListSettlementsQuery);
  const result = await ggrSettlementService.list(query);
  return sendSuccess(res, result, 'Settlements retrieved');
});

export const getSettlement = asyncHandler(async (req: Request, res: Response) => {
  const settlement = await ggrSettlementService.getById(req.params.id as string);
  return sendSuccess(res, { settlement }, 'Settlement retrieved');
});

export const getMyLatestSettlement = asyncHandler(async (req: Request, res: Response) => {
  const settlement = await ggrSettlementService.getLatestForUser(req.user!.id);
  return sendSuccess(res, { settlement }, 'Latest settlement retrieved');
});

export const autoSettleDueMonths = asyncHandler(async (_req: Request, res: Response) => {
  const result = await ggrSettlementService.autoSettleDueMonths();
  return sendSuccess(res, result, 'Due monthly GGR settlements processed');
});

export const downloadSettlementPdf = asyncHandler(async (req: Request, res: Response) => {
  const { buffer, filename } = await ggrSettlementService.getPdf(req.params.id as string);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.send(buffer);
});

export const rechargeGgr = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body as RechargeGgrInput;
  const result = await ggrRechargeService.recharge({
    userId: body.userId,
    amount: body.amount,
    note: body.note,
    createdBy: req.user!.id,
  });
  return sendSuccess(res, result, 'GGR recharged');
});

export const listRecharges = asyncHandler(async (req: Request, res: Response) => {
  const query =
    (req as Request & { validatedQuery?: ListRechargesQuery }).validatedQuery ??
    (req.query as unknown as ListRechargesQuery);
  const result = await ggrRechargeService.list(query);
  return sendSuccess(res, result, 'GGR recharges retrieved');
});
