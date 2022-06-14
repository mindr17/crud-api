import { IUser } from '../interfaces';
import { getUsers } from './usersStartDb';

export class UsersModel {
  private _users: Array<IUser>;

  constructor() {
    // this._users = [];
    this._users = getUsers();
  }

  public get users() {
    return this._users;
  }

  public set users(usersArg) {
    this._users = usersArg;
  }
}

export const usersModel = new UsersModel();
