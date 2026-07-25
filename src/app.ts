import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import { env } from './config/env';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler';
import authRoutes from './modules/auth/auth.route';
import userRoutes from './modules/user/user.route';

export function createApp() {
  const app = express();

  app.set('trust proxy', 1);

  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    }),
  );

  app.use(
    cors({
      origin: env.CLIENT_ORIGIN,
      credentials: true,
    }),
  );

  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // Sanitize operator injection in body (Express 5 req.query is read-only)
  app.use((req, _res, next) => {
    if (req.body && typeof req.body === 'object') {
      sanitizeObject(req.body);
    }
    next();
  });

  // Global API rate limit (abuse protection)
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      message: 'Too many requests. Please try again later.',
    },
  });
  app.use('/api/', apiLimiter);

  app.get('/health', (_req, res) => {
    res.json({ success: true, message: 'OK', timestamp: new Date().toISOString() });
  });

  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/users', userRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

function sanitizeObject(obj: Record<string, unknown>): void {
  for (const key of Object.keys(obj)) {
    if (key.startsWith('$')) {
      delete obj[key];
      continue;
    }
    const value = obj[key];
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      sanitizeObject(value as Record<string, unknown>);
    }
  }
}
