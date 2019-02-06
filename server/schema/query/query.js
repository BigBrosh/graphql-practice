import {getUserById, listUsers} from "../../controllers/UserController";
import {listOrganizations} from "../../controllers/OrganizationController";

export const queryResolvers = {
  users: () => listUsers(),
  user: (parent, { id }) => getUserById(id),
  organizations: () => listOrganizations()
};