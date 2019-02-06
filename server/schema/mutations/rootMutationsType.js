export const MutationsType = `
  type Mutation {
    changeUserName(
      id: Int
      name: String
    ): User
  }
`;