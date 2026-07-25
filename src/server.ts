import { createApp } from './app';
import { connectDatabase } from './config/database';
import { env } from './config/env';
import { runSeeds } from './seed/run';

async function bootstrap() {
  await connectDatabase();
  await runSeeds();

  const app = createApp();

  app.listen(env.PORT, () => {
    console.log(`[server] Listening on http://localhost:${env.PORT}`);
    console.log(`[server] Environment: ${env.NODE_ENV}`);
  });
}

bootstrap().catch((error) => {
  console.error('[server] Failed to start:', error);
  process.exit(1);
});
