import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { env } from './config/env';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler';
import { createRateLimiter } from './middlewares/rateLimit';
import authRoutes from './modules/auth/auth.route';
import userRoutes from './modules/user/user.route';
import gameRoutes from './modules/game/game.route';
import gameV2Routes from './modules/game/game.v2.route';
import gameCatalogueRoutes from './modules/game/gameCatalogue.route';
import apiQuotationRoutes from './modules/apiQuotation/apiQuotation.route';
import ggrSettlementRoutes from './modules/ggrSettlement/ggrSettlement.route';

export function createApp() {
  const app = express();

  // Trust Docker / Nginx private hops so req.ip is not the proxy container.
  app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    }),
  );

  // Dashboard APIs: locked to client origin. Game integration API: open (secret in body).
  app.use((req, res, next) => {
    if (req.path.startsWith('/api/game/')) {
      return cors({ origin: true, credentials: false })(req, res, next);
    }
    return cors({
      origin: env.CLIENT_ORIGIN,
      credentials: true,
    })(req, res, next);
  });

  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use((req, _res, next) => {
    if (req.body && typeof req.body === 'object') {
      sanitizeObject(req.body);
    }
    next();
  });

  const apiLimiter = createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 2000,
    message: 'Too many requests. Please try again later.',
    // Game partners have their own per-route limiters and much higher volume.
    skip: (req) => req.originalUrl.startsWith('/api/game/'),
  });
  app.use('/api/', apiLimiter);

  app.get('/health', (_req, res) => {
    res.json({ success: true, message: 'OK', timestamp: new Date().toISOString() });
  });

  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/games', gameCatalogueRoutes);
  app.use('/api/v1/quotations', apiQuotationRoutes);
  app.use('/api/v1/ggr', ggrSettlementRoutes);
  app.use('/api/game/v1', gameRoutes);
  app.use('/api/game/v2', gameV2Routes);

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
