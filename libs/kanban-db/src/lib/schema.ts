import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  userId: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});
