import { kanbanDb } from './kanban-db';

describe('kanbanDb', () => {
  it('should work', () => {
    expect(kanbanDb()).toEqual('kanban-db');
  });
});
