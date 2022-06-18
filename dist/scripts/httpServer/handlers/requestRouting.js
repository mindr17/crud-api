"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestRouting = void 0;
const httpHelpers_1 = require("../../httpHelpers");
const UsersController_1 = require("../../users/UsersController");
exports.requestRouting = {
    get: (req) => {
        const reqUrl = req.url;
        if (reqUrl === '/api/users' || reqUrl === '/api/users/') {
            const usersArrJson = UsersController_1.usersController.getAllUsersJson();
            return [200, usersArrJson];
        }
        else if (reqUrl.startsWith('/api/users')) {
            const uuid = (0, httpHelpers_1.getUuidStr)(req);
            const userJson = UsersController_1.usersController.getSomeUserJson(uuid);
            return [200, userJson];
        }
        else {
            throw new Error('Bad request url!');
        }
    },
    post: async (req) => {
        const bodyObj = await (0, httpHelpers_1.getReqBodyObj)(req);
        const userJson = UsersController_1.usersController.addNewUser(bodyObj);
        return [201, userJson];
    },
    put: async (req) => {
        const uuid = (0, httpHelpers_1.getUuidStr)(req);
        const bodyObj = await (0, httpHelpers_1.getReqBodyObj)(req);
        const userJson = UsersController_1.usersController.updateUser(uuid, bodyObj);
        return [200, userJson];
    },
    delete: async (req) => {
        const uuid = (0, httpHelpers_1.getUuidStr)(req);
        UsersController_1.usersController.deleteUser(uuid);
        return [204, 'Deleted successfully - will not be shown'];
    },
};
