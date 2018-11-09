import { organizations } from "../model/Organization";

function listOrganizations() {
  return organizations;
}

function listOrganizationsByUserId(userId) {
  return organizations.filter(({ users }) => users.indexOf(userId) !== -1);
}

export {
  listOrganizations,
  listOrganizationsByUserId
};