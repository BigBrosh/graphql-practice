import { users } from "../model/User";
import {organizations} from "../model/Organization";

function listUsers() {
  return users;
}

function listUsersByOrganizationId(orgId) {
  return organizations.filter(({ users }) => users.indexOf(orgId) !== -1);
}

function getUserById(userId) {
  return users.filter(({ id }) => id === userId)[0];
}

export {
  listUsers,
  listUsersByOrganizationId,
  getUserById
};