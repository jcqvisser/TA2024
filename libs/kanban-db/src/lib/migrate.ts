import { MigrationConfig } from 'drizzle-orm/migrator';
import { buildDb, createConnection } from './db';
import { migrate } from 'drizzle-orm/mysql2/migrator';

export async function migrateDb(config: MigrationConfig) {
  const connection = await createConnection();
  const db = await buildDb(connection);

  console.log(__dirname);
  await migrate(db, config);
}
