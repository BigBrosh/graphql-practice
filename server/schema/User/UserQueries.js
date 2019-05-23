import {listOrganizationsByUserId} from "../../controllers/OrganizationController";

export const UserQueries = {
  organizations: (parent) => listOrganizationsByUserId(parent.id)
};