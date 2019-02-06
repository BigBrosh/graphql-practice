export const rootQuery = `
  type Query {
    organizations: [Organization],
    users: [User],
    user(
      id: Int
    ): User
  }
`;