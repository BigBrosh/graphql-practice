import {listUsersByOrganizationId} from "../../controllers/UserController";

export const OrganizationQueries = {
  users: ({ id }) => listUsersByOrganizationId(id)
};