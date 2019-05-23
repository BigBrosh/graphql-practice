import {modifyUser} from '../../controllers/UserController';

const changeUserName = (parent, { user: { id, name } }) =>
  modifyUser(id, 'name', name);

export const Mutations = {
  changeUserName
};