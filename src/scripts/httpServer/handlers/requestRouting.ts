import { getHandler } from './requestHandlers/getHandler';

export const requestRouting = {
  get: function (req, res) {
    getHandler(req, res);
  },

  post: function (req, res) {

  },

  put: function (req, res) {

  },
  
  delete: function (req, res) {

  },
};
