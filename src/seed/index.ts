import { Seeder } from './types';
import { superAdminSeeder } from './seeders/superAdmin.seeder';

/**
 * Register seeders here. They run in order on boot / `npm run seed`.
 * Add future collection seeders to this array — no bootstrap rewrite needed.
 *
 * Local-only bulk seeds (src/data + their seeders) are NOT registered here.
 * Run them on a machine with source, never in Docker/Render:
 *   npm run seed:games
 *   npm run seed:quotations
 */
export const seeders: Seeder[] = [superAdminSeeder];
