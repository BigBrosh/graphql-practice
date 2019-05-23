export const rootQuery = `
  type Query {
    organizations: [Organization],
    users(
      limit: Int
    ): [User],
    user(
      id: Int
    ): User
  }
`;