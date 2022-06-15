import { IncomingMessage } from 'http';
import { getReqBodyObj, getUuidStr } from '../../httpHelpers';
import { handlerResult } from '../../types';
import { usersController } from "../../users/UsersController";

export const requestRouting = {
  get: (req: IncomingMessage): handlerResult => {
    const reqUrl: string = req.url;
    if (reqUrl === '/api/users' || reqUrl === '/api/users/') {
      const usersArrJson = usersController.getAllUsersJson();
      return [ 200, usersArrJson ];
    } else if (reqUrl.startsWith('/api/users')) {
      const uuid: string = getUuidStr(req);
      const userJson: string = usersController.getSomeUserJson(uuid);
      return [ 200, userJson ];
    } else {
      throw new Error('Bad request url!');
    }
  },

  post: async (req: IncomingMessage): Promise<handlerResult> => {
    const bodyObj = await getReqBodyObj(req);
    const userJson: string = usersController.addNewUser(bodyObj);
    return [ 201, userJson ];
  },
  
  put: async (req: IncomingMessage) => {
    const uuid: string = getUuidStr(req);
    const bodyObj = await getReqBodyObj(req);
    const userJson: string = usersController.updateUser(uuid, bodyObj);
    return [ 200, userJson ];
  },
  
  delete: async (req: IncomingMessage) => {
    const uuid: string = getUuidStr(req);
    usersController.deleteUser(uuid);
    return [ 204, 'Deleted successfully - will not be shown' ];
  },
}
