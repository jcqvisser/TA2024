import { Static, Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';

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

process.env.KANBAN_BE_HOST;

export function exitIfEnvIsInvalid() {
  const envValidator = TypeCompiler.Compile(envSchema);
  const isValid = envValidator.Check(process.env);
  if (!isValid) {
    console.error('process.env is not valid', envValidator.Errors);
  }
}
