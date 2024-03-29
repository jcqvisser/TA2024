import { Static, Type } from '@sinclair/typebox';
import { validateEnv } from 'env-validator';

const envSchema = Type.Object({
  KANBAN_BE_PORT: Type.String(),
  KANBAN_BE_HOST: Type.String(),
});

type Env = Static<typeof envSchema>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends Env {}
  }
}

export function validateKanbanBeEnv() {
  validateEnv(envSchema);
}
