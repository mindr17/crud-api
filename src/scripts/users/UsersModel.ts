import { IUser } from '../types';
import { getUsers } from './usersStartDb';

export class UsersModel {
  private _users: Array<IUser>;

  constructor() {
    // this._users = [];
    this._users = getUsers();
  }

  public get users(): Array<IUser> {
    return this._users;
  }

  public set users(usersArg: Array<IUser>) {
    this._users = usersArg;
  }

  public addUser(newUser: IUser): void {
    this._users.push(newUser);
  }

  public getUser(uuidStr: string): IUser {
    const usersFiltered = this._users.filter((user) => {
      return user.id === uuidStr;
    });
    if (usersFiltered.length === 0) {
      throw new Error('Record with id === userId does not exist!');
    } 
    return usersFiltered[0];
  }
  
  public deleteUser(uuidStr: string): void {
    this._users = this._users.filter((user) => {
      return user.id !== uuidStr;
    });
  }
  
  public updateUser(uuidStr: string, newUserParam: IUser): IUser {
    this.deleteUser(uuidStr);
    const newUser = newUserParam;
    newUser.id = uuidStr;
    this._users.push(newUser);
    // console.log('newUser: ', newUser);
    return newUser;
  }
}

export const usersModel = new UsersModel();
