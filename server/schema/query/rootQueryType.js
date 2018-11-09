export const rootQuery = `
  type Query {
    users: [User],
    user(
      id: Int
    ): User
  }
`;