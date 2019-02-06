import { makeExecutableSchema } from 'graphql-tools';

import {UserType} from "./User/UserType";
import { UserQueries as User } from "./User/UserQueries";
import {OrganizationType} from "./Organization/OrganizationType";
import {OrganizationQueries as Organization} from "./Organization/OrganizationQueries";
import {rootQuery} from "./query/rootQueryType";
import {MutationsType} from './mutations/rootMutationsType';

import {queryResolvers} from "./query/query";
import {Mutations} from './mutations/mutations';

export const schema = makeExecutableSchema({
  typeDefs: [
    UserType,
    OrganizationType,
    rootQuery,
    MutationsType
  ],
  resolvers: {
    User,
    Organization,
    Query: queryResolvers,
    Mutation: Mutations
  }
});