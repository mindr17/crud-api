import { getHandler } from './requestHandlers/getHandler';
import { usersController } from "../../users/UsersController";

export const requestRouting = {
  get: function (req, res) {
    // getHandler(req, res);
    const reqUrl = req.url;
    if (reqUrl === 'api/users') {

      // const usersStr = JSON.stringify(users);
      res.end('123');
    } else if (reqUrl.startsWith('api/users')) {
      
    } else {
      throw new Error('Bad url');
      res.end('123');
    }
  },

  post: function (req, res) {

  },

  put: function (req, res) {

  },
  
  delete: function (req, res) {

  },
};
