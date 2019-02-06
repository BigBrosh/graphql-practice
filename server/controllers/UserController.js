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

function modifyUser(id, name, param) {
  const user = users.find(user => user.id === id);
  user[name] = param;

  return user;
}

export {
  listUsers,
  listUsersByOrganizationId,
  getUserById,
  modifyUser
};