import mongoose from 'mongoose';
import { env } from './env';

export async function connectDatabase(): Promise<typeof mongoose> {
  mongoose.set('strictQuery', true);

  await mongoose.connect(env.MONGODB_URI, {
    dbName: env.MONGODB_DB_NAME,
  });

  console.log(`[db] Connected to MongoDB (${mongoose.connection.name || 'default'})`);
  return mongoose;
}

export async function disconnectDatabase(): Promise<void> {
  await mongoose.disconnect();
  console.log('[db] Disconnected from MongoDB');
}
