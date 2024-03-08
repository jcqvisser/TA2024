import { TObject, TProperties } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';

/**
 * Also use the following:
 *
 * ```ts
 *
 * const envSchema = Type.Object({
 *   SOMETHING: Type.String(),
 * });
 *
 * type Env = Static<typeof envSchema>;
 *
 * declare global {
 *   // eslint-disable-next-line @typescript-eslint/no-namespace
 *   namespace NodeJS {
 *     // eslint-disable-next-line @typescript-eslint/no-empty-interface
 *     interface ProcessEnv extends Env {}
 *   }
 * }
 * ```
 */
export function validateEnv(envSchema: TObject<TProperties>) {
  const envValidator = TypeCompiler.Compile(envSchema);
  const isValid = envValidator.Check(process.env);
  if (!isValid) {
    console.error('process.env is not valid', envValidator.Errors);
  }
}
