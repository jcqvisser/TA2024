import { MigrationConfig } from 'drizzle-orm/migrator';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { ConnectionOptions } from 'mysql2';
import { buildDbOrThrow } from './db';
import { MySql2Database } from 'drizzle-orm/mysql2';

async function migrateDbOrFail(
  db: MySql2Database<Record<string, unknown>>,
  config: MigrationConfig
) {
  try {
    await migrate(db, config);
  } catch (e) {
    console.error('[kanban-db] Failed to migrate db: ', e);
    throw e;
  }
}

export async function migrateDb(
  connectionOptions: ConnectionOptions,
  config: MigrationConfig
): Promise<void> {
  console.info('[kanban-db] Creating DB connection...');

  const db = await buildDbOrThrow(connectionOptions, {
    logger: undefined,
    mode: undefined,
    schema: undefined,
  });

  console.info('[kanban-db] DB connection created');
  console.info('[kanban-db] Migrating DB...');

  await migrateDbOrFail(db, config);
  console.info('[kanban-db] DB migrated');
}
