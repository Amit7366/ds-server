import { Seeder } from './types';
import { superAdminSeeder } from './seeders/superAdmin.seeder';

/**
 * Register seeders here. They run in order on boot / `npm run seed`.
 * Add future collection seeders to this array — no bootstrap rewrite needed.
 *
 * Game catalogue is NOT registered here. Run it manually with `npm run seed:games`
 * so Docker deploys do not seed or ship gameData.
 */
export const seeders: Seeder[] = [superAdminSeeder];
