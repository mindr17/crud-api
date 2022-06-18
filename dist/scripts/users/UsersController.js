"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const UsersModel_1 = require("./UsersModel");
const crypto_1 = require("crypto");
class UsersController {
    _usersModel;
    constructor() {
        this._usersModel = UsersModel_1.usersModel;
    }
    getAllUsers() {
        return this._usersModel.users;
    }
    getAllUsersJson() {
        const usersJson = JSON.stringify(this._usersModel.users);
        return usersJson;
    }
    getSomeUserJson(uuid) {
        const userObj = this._usersModel.getUser(uuid);
        const someUserJson = JSON.stringify(userObj);
        return someUserJson;
    }
    addNewUser(userObj) {
        const generatedUuid = (0, crypto_1.randomUUID)();
        userObj['id'] = generatedUuid;
        this._usersModel.users.push(userObj);
        const userFromDbJson = this.getSomeUserJson(generatedUuid);
        const userFromDb = JSON.parse(userFromDbJson);
        return userFromDbJson;
    }
    updateUser(uuid, userObj) {
        const newUser = this._usersModel.updateUser(uuid, userObj);
        const newUserJson = JSON.stringify(newUser);
        return newUserJson;
    }
    deleteUser(uuid) {
        const testUser = this._usersModel.getUser(uuid);
        this._usersModel.deleteUser(uuid);
    }
}
exports.usersController = new UsersController();
