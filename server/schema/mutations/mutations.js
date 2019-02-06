import {modifyUser} from '../../controllers/UserController';

const changeUserName = (parent, {id, name}) =>
  modifyUser(id, 'name', name);

export const Mutations = {
  changeUserName
};