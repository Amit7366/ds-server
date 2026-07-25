import { Model } from 'mongoose';
import { SeedContext } from './types';

/**
 * Ensure a Mongoose model's collection exists in MongoDB.
 * If the collection is missing, create it; if present, leave it as-is.
 */
export async function ensureCollection<T>(
  model: Model<T>,
  ctx: SeedContext,
): Promise<void> {
  const collectionName = model.collection.name;
  const db = model.db;

  if (!db) {
    throw new Error(`No database connection for model ${model.modelName}`);
  }

  const existing = await db.db?.listCollections({ name: collectionName }).toArray();
  if (existing && existing.length > 0) {
    ctx.logger.info(`Collection "${collectionName}" already exists`);
    return;
  }

  await db.createCollection(collectionName);
  ctx.logger.info(`Collection "${collectionName}" created`);
}

/**
 * Seed documents only when the predicate finds none.
 * Prefer this for idempotent seeds across any future collection.
 */
export async function seedIfEmpty<T>(
  model: Model<T>,
  filter: Record<string, unknown>,
  createFn: () => Promise<unknown>,
  ctx: SeedContext,
  label: string,
): Promise<boolean> {
  await ensureCollection(model, ctx);

  const existing = await model.exists(filter);
  if (existing) {
    ctx.logger.info(`${label}: already present — skipped`);
    return false;
  }

  await createFn();
  ctx.logger.info(`${label}: seeded successfully`);
  return true;
}
