import { getUsers } from './usersStartDb';
import '../interfaces';

class UsersModel {
  private _users: Array<IUser>;

  constructor() {
    this._users = getUsers();
  }

  public get users() {
    return this._users;
  }

  // public get users() {
  //   return this._users;
  // }
}

export const usersModel = new UsersModel();
