import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../utils/errors';
import { env } from '../config/env';

export function notFoundHandler(_req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
}

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      details: err.details,
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      details: err.flatten().fieldErrors,
    });
  }

  // Mongoose duplicate key
  if (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    (err as { code?: number }).code === 11000
  ) {
    const keyValue = (err as { keyValue?: Record<string, unknown> }).keyValue;
    const field = keyValue ? Object.keys(keyValue)[0] : 'field';
    return res.status(409).json({
      success: false,
      message: `${field} already exists`,
      details: keyValue,
    });
  }

  console.error('[error]', err);

  return res.status(500).json({
    success: false,
    message: env.NODE_ENV === 'production' ? 'Internal server error' : String(err),
  });
}
