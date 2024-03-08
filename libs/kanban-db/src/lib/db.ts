import { MySql2DrizzleConfig, drizzle } from 'drizzle-orm/mysql2';
import * as mysql from 'mysql2/promise';

export async function createConnection(
  conn: mysql.ConnectionOptions
): Promise<mysql.Connection> {
  try {
    return await mysql.createConnection(conn);
  } catch (e) {
    console.error('[kanban-db] Failed to create mySQL connection');
    throw e;
  }
}

export async function buildDbOrThrow(
  connectionOptions: mysql.ConnectionOptions,
  config: MySql2DrizzleConfig<Record<string, never>> | undefined = undefined
) {
  try {
    const connection = await createConnection(connectionOptions);
    return drizzle(connection, config);
  } catch (e) {
    console.error(`[kanban-db] Failed connect drizzle to DB`);
    throw e;
  }
}
