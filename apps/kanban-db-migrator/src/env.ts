import { Static, Type } from '@sinclair/typebox';
import { validateEnv } from 'env-validator';

const envSchema = Type.Object({
  KANBAN_DB_MIGRATOR_DB_HOST: Type.String(),
  KANVEN_DB_MIGRATOR_USER: Type.String(),
  KANVEN_DB_MIGRATOR_DATABASE: Type.String(),
});

type Env = Static<typeof envSchema>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends Env {}
  }
}

export async function validateKanbanDbMigratorEnv() {
  validateEnv(envSchema);
}
