import { makeExecutableSchema } from 'graphql-tools';

import {UserType} from "./User/UserType";
import { UserQueries as User } from "./User/UserQueries";
import {OrganizationType} from "./Organization/OrganizationType";
import {OrganizationQueries as Organization} from "./Organization/OrganizationQueries";
import {rootQuery} from "./query/rootQuery";

import {queryResolvers} from "./query/query";

export const schema = makeExecutableSchema({
  typeDefs: [
    UserType,
    OrganizationType,
    rootQuery
  ],
  resolvers: {
    User,
    Organization,
    Query: queryResolvers
  }
});