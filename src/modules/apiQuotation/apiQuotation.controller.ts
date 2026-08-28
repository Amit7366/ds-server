import { Request, Response } from 'express';
import { apiQuotationService } from './apiQuotation.service';
import { sendCreated, sendSuccess } from '../../utils/apiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import {
  CreateQuotationInput,
  ListQuotationsQuery,
  UpdateQuotationInput,
} from './apiQuotation.validation';

export const listQuotations = asyncHandler(async (req: Request, res: Response) => {
  const query =
    (req as Request & { validatedQuery?: ListQuotationsQuery }).validatedQuery ??
    (req.query as unknown as ListQuotationsQuery);
  const result = await apiQuotationService.listQuotations(query);
  return sendSuccess(res, result, 'Quotations retrieved');
});

export const listQuotationFilters = asyncHandler(async (_req: Request, res: Response) => {
  const result = await apiQuotationService.listFilters();
  return sendSuccess(res, result, 'Quotation filters retrieved');
});

export const getQuotation = asyncHandler(async (req: Request, res: Response) => {
  const quotation = await apiQuotationService.getQuotationById(req.params.id as string);
  return sendSuccess(res, { quotation }, 'Quotation retrieved');
});

export const createQuotation = asyncHandler(async (req: Request, res: Response) => {
  const quotation = await apiQuotationService.createQuotation(req.body as CreateQuotationInput);
  return sendCreated(res, { quotation }, 'Quotation created');
});

export const updateQuotation = asyncHandler(async (req: Request, res: Response) => {
  const quotation = await apiQuotationService.updateQuotation(
    req.params.id as string,
    req.body as UpdateQuotationInput,
  );
  return sendSuccess(res, { quotation }, 'Quotation updated');
});

export const deleteQuotation = asyncHandler(async (req: Request, res: Response) => {
  const quotation = await apiQuotationService.deleteQuotation(req.params.id as string);
  return sendSuccess(res, { quotation }, 'Quotation deleted');
});
