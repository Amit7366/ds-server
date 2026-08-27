import { connectDatabase, disconnectDatabase } from '../config/database';
import { gameCatalogueSeeder } from './seeders/gameCatalogue.seeder';
import { SeedContext } from './types';

const ctx: SeedContext = {
  logger: {
    info: (message) => console.log(`[seed:games] ${message}`),
    warn: (message) => console.warn(`[seed:games] ${message}`),
  },
};

async function main() {
  try {
    await connectDatabase();
    ctx.logger.info(`→ ${gameCatalogueSeeder.name}`);
    await gameCatalogueSeeder.run(ctx);
    ctx.logger.info('Seeding complete');
  } catch (error) {
    console.error('[seed:games] Failed:', error);
    process.exitCode = 1;
  } finally {
    await disconnectDatabase();
  }
}

void main();
