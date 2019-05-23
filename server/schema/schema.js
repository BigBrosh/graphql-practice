import { makeExecutableSchema } from 'graphql-tools';

import {UserType} from "./User/UserType";
import {OrganizationType} from "./Organization/OrganizationType";
import {rootQuery} from "./Query/QueryType";
import {MutationsType} from './Mutations/MutationsType';

import {queryResolvers} from "./Query/Query";
import {Mutations} from './Mutations/Mutations';
import {UserQueries} from "./User/UserQueries";
import {OrganizationQueries} from "./Organization/OrganizationQueries";
import UserInput from "./Mutations/inputTypes/UserInput";

export const schema = makeExecutableSchema({
  typeDefs: [
    UserInput,
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