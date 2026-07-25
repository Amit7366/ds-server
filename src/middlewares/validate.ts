import { NextFunction, Request, Response } from 'express';
import { ZodType } from 'zod';
import { ValidationError } from '../utils/errors';

type RequestPart = 'body' | 'query' | 'params';

export function validate(schema: ZodType, part: RequestPart = 'body') {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[part]);

    if (!result.success) {
      return next(
        new ValidationError('Validation failed', result.error.flatten().fieldErrors),
      );
    }

    if (part === 'body') {
      req.body = result.data;
    } else if (part === 'query') {
      (req as Request & { validatedQuery?: unknown }).validatedQuery = result.data;
      Object.assign(req.query, result.data);
    } else {
      req.params = result.data as typeof req.params;
    }

    return next();
  };
}
