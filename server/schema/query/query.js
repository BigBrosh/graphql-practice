import {listUsers} from "../../controllers/UserController";

export const queryResolvers = {
  users: () => listUsers()
};