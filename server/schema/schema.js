import { makeExecutableSchema } from 'graphql-tools';

import {UserType} from "./User/UserType";
import {rootQuery} from "./query/rootQuery";

import {queryResolvers} from "./query/query";

export const schema = makeExecutableSchema({
  typeDefs: [
    UserType,
    rootQuery
  ],
  resolvers: {
    Query: queryResolvers
  }
});