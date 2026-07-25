import { connectDatabase, disconnectDatabase } from '../config/database';
import { seeders } from './index';
import { SeedContext } from './types';

const ctx: SeedContext = {
  logger: {
    info: (message) => console.log(`[seed] ${message}`),
    warn: (message) => console.warn(`[seed] ${message}`),
  },
};

export async function runSeeds(): Promise<void> {
  ctx.logger.info(`Running ${seeders.length} seeder(s)...`);

  for (const seeder of seeders) {
    ctx.logger.info(`→ ${seeder.name}`);
    await seeder.run(ctx);
  }

  ctx.logger.info('Seeding complete');
}

async function main() {
  try {
    await connectDatabase();
    await runSeeds();
  } catch (error) {
    console.error('[seed] Failed:', error);
    process.exitCode = 1;
  } finally {
    await disconnectDatabase();
  }
}

if (require.main === module) {
  void main();
}
