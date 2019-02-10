import { makeExecutableSchema } from 'graphql-tools';

import {UserType} from "./User/UserType";
import {OrganizationType} from "./Organization/OrganizationType";
import {rootQuery} from "./query/rootQueryType";
import {MutationsType} from './mutations/rootMutationsType';

import {queryResolvers} from "./query/query";
import {Mutations} from './mutations/mutations';
import {UserQueries} from "./User/UserQueries";
import {OrganizationQueries} from "./Organization/OrganizationQueries";

export const schema = makeExecutableSchema({
  typeDefs: [
    UserType,
    OrganizationType,
    rootQuery,
    MutationsType
  ],
  resolvers: {
    Query: queryResolvers,
    Mutation: Mutations,
    User: UserQueries,
    Organization: OrganizationQueries
  }
});