"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersModel = exports.UsersModel = void 0;
const usersStartDb_1 = require("./usersStartDb");
class UsersModel {
    _users;
    constructor() {
        // this._users = [];
        this._users = (0, usersStartDb_1.getUsers)();
    }
    get users() {
        return this._users;
    }
    set users(usersArg) {
        this._users = usersArg;
    }
    addUser(newUser) {
        this._users.push(newUser);
    }
    getUser(uuidStr) {
        const usersFiltered = this._users.filter((user) => {
            return user.id === uuidStr;
        });
        if (usersFiltered.length === 0) {
            throw new Error('Record with id === userId does not exist!');
        }
        return usersFiltered[0];
    }
    deleteUser(uuidStr) {
        this._users = this._users.filter((user) => {
            return user.id !== uuidStr;
        });
    }
    updateUser(uuidStr, newUserParam) {
        this.deleteUser(uuidStr);
        const newUser = newUserParam;
        newUser.id = uuidStr;
        this._users.push(newUser);
        return newUser;
    }
}
exports.UsersModel = UsersModel;
exports.usersModel = new UsersModel();
