import { gql } from 'apollo-boost';

export const listUsers = gql `
  {
    users {
      id
      name
    }
  }
`;