export interface SeedContext {
  logger: {
    info: (message: string) => void;
    warn: (message: string) => void;
  };
}

export interface Seeder {
  /** Unique name for logging */
  name: string;
  /** Run idempotent seed logic. Create collection/docs if missing; leave existing alone. */
  run: (ctx: SeedContext) => Promise<void>;
}
