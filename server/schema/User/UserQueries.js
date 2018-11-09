import {listOrganizationsByUserId} from "../../controllers/OrganizationController";

export const UserQueries = {
  organizations: ({ id }) => listOrganizationsByUserId(id)
};