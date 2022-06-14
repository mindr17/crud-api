import { usersModel, UsersModel } from './UsersModel';
import { randomUUID } from 'crypto';

class UsersController {
  private _usersModel: UsersModel;

  constructor() {
    this._usersModel = usersModel;
  }

  public getAllUsers() {
    return this._usersModel.users;
  }

  public getSomeUser(id) {
    // this._usersModel.users = this._usersModel.users.push(id);
  }

  public addNewUser(userObj) {
    const uuid = crypto.randomUUID();
    console.log(uuid)
  }

  public updateUser(userObj) {
    // this._usersModel.users = this._usersModel.users.push(id);
  }

  public removeUser(id) {
    // this._usersModel.users = this._usersModel.users.push(id);
  }

}

export const usersController = new UsersController();
