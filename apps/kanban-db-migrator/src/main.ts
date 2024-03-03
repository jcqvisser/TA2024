import { migrateDb } from 'kanban-db';

migrateDb({
  migrationsFolder: 'libs/kanban-db/src/lib/migrations',
})
  .then((result) => {
    console.info('MIGRATION SUCEEDED', result);
    process.exit(0);
  })
  .catch((err) => {
    console.error('MIGRATION FAILED', err);
    process.exit(1);
  });
