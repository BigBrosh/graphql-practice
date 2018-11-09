import { gql } from 'apollo-boost';

export const listUsers = gql `
  query {
    users {
      id
      name
    }
  }
`;

export const getUserById = gql `
  query($userId: Int) {
    user(id: $userId) {
      id
      name
      organizations {
        id
        name
      }
    }
  }
`;