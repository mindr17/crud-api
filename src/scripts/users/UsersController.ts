import { usersModel, UsersModel } from './UsersModel';
import { randomUUID } from 'crypto';
import { IUser } from '../types';

class UsersController {
  private _usersModel: UsersModel;

  constructor() {
    this._usersModel = usersModel;
  }

  public getAllUsers() {
    return this._usersModel.users;
  }

  public getAllUsersJson(): string {
    const usersJson: string = JSON.stringify(this._usersModel.users);
    return usersJson;
  }

  public getSomeUserJson(uuid: string): string {
    const userObj = this._usersModel.getUser(uuid)
    const someUserJson: string = JSON.stringify(userObj);
    return someUserJson;
  }

  public addNewUser(userObj: IUser): string {
    const generatedUuid: string = randomUUID();
    userObj['id'] = generatedUuid;
    this._usersModel.users.push(userObj);

    const userFromDbJson: string = this.getSomeUserJson(generatedUuid);
    const userFromDb: IUser = JSON.parse(userFromDbJson);
    return userFromDbJson;
  }

  public updateUser(uuid: string, userObj: IUser): string {
    const newUser: IUser = this._usersModel.updateUser(uuid, userObj);
    const newUserJson: string = JSON.stringify(newUser);
    return newUserJson;
  }

  public deleteUser(uuid: string): void {
    const testUser = this._usersModel.getUser(uuid);
    this._usersModel.deleteUser(uuid);
  }
}

export const usersController = new UsersController();
