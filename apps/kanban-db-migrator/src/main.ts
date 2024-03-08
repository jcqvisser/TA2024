import { migrateDb } from 'kanban-db';
import { validateKanbanDbMigratorEnv } from './env';

validateKanbanDbMigratorEnv();

migrateDb(
  {
    host: process.env.KANBAN_DB_MIGRATOR_DB_HOST,
    user: process.env.KANBAN_DB_MIGRATOR_USER,
    database: process.env.KANBAN_DB_MIGRATOR_USER,
  },
  {
    migrationsFolder: 'libs/kanban-db/src/lib/migrations',
  }
)
  .then(() => {
    console.info('[kanban-db-migrator] Migration Succeeded');
    process.exit(0);
  })
  .catch((err) => {
    console.error('[kanban-db-migrator] Migration failed', err);
    process.exit(1);
  });
