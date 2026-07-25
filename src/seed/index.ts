import { Seeder } from './types';
import { superAdminSeeder } from './seeders/superAdmin.seeder';

/**
 * Register seeders here. They run in order on boot / `npm run seed`.
 * Add future collection seeders to this array — no bootstrap rewrite needed.
 */
export const seeders: Seeder[] = [superAdminSeeder];
