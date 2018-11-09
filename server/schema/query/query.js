import {getUserById, listUsers} from "../../controllers/UserController";

export const queryResolvers = {
  users: () => listUsers(),
  user: (parent, { id }) => getUserById(id)
};