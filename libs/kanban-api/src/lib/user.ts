import { Static, Type } from '@sinclair/typebox';

export const userIdentifierSchema = Type.Object({
  userId: Type.Integer({ minimum: 0 }),
});
export type UserIdentifier = Static<typeof userIdentifierSchema>;
export const userDataSchema = Type.Object({ name: Type.String() });
export type UserData = Static<typeof userDataSchema>;
export const userSchema = Type.Composite([
  userIdentifierSchema,
  userDataSchema,
]);
export type User = Static<typeof userSchema>;

// Create
export const createUserRequestSchema = userDataSchema;
export type CreateUserRequest = Static<typeof createUserRequestSchema>;
export const createUserResponseSchema = userSchema;
export type CreateUserResponse = Static<typeof createUserResponseSchema>;

// Read One
export const readUserRequestSchema = userIdentifierSchema;
export type ReadUserRequest = Static<typeof readUserRequestSchema>;
export const readUserResponseSchema = userSchema;
export type ReadUserResponse = Static<typeof readUserResponseSchema>;

// Read Many
export const readManyUsersRequestSchema = Type.Object({
  pageIndex: Type.Integer({ minimum: 0 }),
  pageSize: Type.Integer({ minimum: 1, maximum: 100 }),
  sortBy: Type.KeyOf(userDataSchema),
  order: Type.Union([Type.Literal('desc'), Type.Literal('asc')]),
});
export type ReadManyUsersRequest = Static<typeof readManyUsersRequestSchema>;
export const readManyUsersResponseSchema = Type.Object({
  items: Type.Array(userSchema),
  totalPagesCount: Type.Integer({ minimum: 0 }),
  pageIndex: Type.Integer({ minimum: 0 }),
});
export type ReadManyUsersResponse = Static<typeof readManyUsersResponseSchema>;

// Update One
export const updateUserRequestSchema = Type.Partial(userDataSchema);
export type UpdateUserRequest = Static<typeof updateUserRequestSchema>;
export const updateUserResponseSchema = userSchema;
export type UpdateUserResponseSchema = Static<typeof updateUserResponseSchema>;

// Delete One
export const deleteUserRequestSchema = userIdentifierSchema;
export type DeleteUserRequest = Static<typeof deleteUserRequestSchema>;
export const deleteUserResponseSchema = userSchema;
export type DeleteUserResponse = Static<typeof deleteUserResponseSchema>;
