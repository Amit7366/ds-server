import { connectDatabase, disconnectDatabase } from '../config/database';
import { apiQuotationSeeder } from './seeders/apiQuotation.seeder';
import { SeedContext } from './types';

const ctx: SeedContext = {
  logger: {
    info: (message) => console.log(`[seed:quotations] ${message}`),
    warn: (message) => console.warn(`[seed:quotations] ${message}`),
  },
};

async function main() {
  try {
    await connectDatabase();
    ctx.logger.info(`→ ${apiQuotationSeeder.name}`);
    await apiQuotationSeeder.run(ctx);
    ctx.logger.info('Seeding complete');
  } catch (error) {
    console.error('[seed:quotations] Failed:', error);
    process.exitCode = 1;
  } finally {
    await disconnectDatabase();
  }
}

void main();
