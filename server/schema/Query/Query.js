import {getUserById, listUsers} from "../../controllers/UserController";
import {listOrganizations} from "../../controllers/OrganizationController";

export const queryResolvers = {
  users: (_, { limit }) => listUsers(limit),
  user: (parent, { id }) => getUserById(id),
  organizations: () => listOrganizations()
};