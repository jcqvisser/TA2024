import { MySql2DrizzleConfig, drizzle } from 'drizzle-orm/mysql2';
import * as mysql from 'mysql2/promise';

export async function createConnection(): Promise<mysql.Connection> {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'kanbanlocal',
    database: 'kanban',
    password: 'ewq321',
  });
}

export async function buildDb(
  connection: mysql.Connection,
  config: MySql2DrizzleConfig<Record<string, never>> | undefined = undefined
) {
  return drizzle(connection, config);
}
