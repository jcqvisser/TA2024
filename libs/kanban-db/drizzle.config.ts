import 'dotenv/config';
import type { Config } from 'drizzle-kit';
export default {
  schema: 'libs/kanban-db/src/lib/schema.ts',
  out: 'libs/kanban-db/src/lib/migrations',
  driver: 'mysql2',
  dbCredentials: {
    host: '0.0.0',
    user: 'kanbanlocal',
    password: 'ewq321',
    database: 'kanban',
  },
} satisfies Config;
