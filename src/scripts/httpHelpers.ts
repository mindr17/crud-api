import { validate as uuidValidate } from 'uuid';
import { IncomingMessage, ServerResponse } from "http";
import { IUser } from './types';

export const validateUserObj = (user: IUser) => {
  const { username, age, hobbies } = user;
  if (typeof username !== 'string') {
    throw new Error('You provided an incorrect user object!');
  }
  if (typeof age !== 'number') {
    throw new Error('You provided an incorrect user object!');
  }
  if (!Array.isArray(hobbies)) {
    throw new Error('You provided an incorrect user object!');
  }
  hobbies.forEach((someHobbie) => {
    if (typeof someHobbie !== 'string') {
      throw new Error('You provided an incorrect user object!');
    }
  });
};

export const getReqBodyObj = async (req: IncomingMessage): Promise<IUser> => {
  const bodyArr = [];
  req.on("data", chunk => {
    bodyArr.push(chunk);
  });
  await new Promise((resolve, reject) => {
    req.on("end", () => {
      resolve('done');
    });
  });
  const body = Buffer.concat(bodyArr).toString();
  const bodyObj = JSON.parse(body);
  return bodyObj;
};

export const checkEndpoint = (req: IncomingMessage): void => {
  const reqUrl = req.url;
  if (!reqUrl.startsWith('/api/users')) 
  {
    throw new Error('No such endpoint!');
  }
};

export const getUuidStr = (req: IncomingMessage) => {
  try {
    const reqUrl = req.url;
    const reqUuidStr = reqUrl.substring(11, reqUrl.length);
    const uuidIsCorrect = uuidValidate(reqUuidStr);
    if (!uuidIsCorrect) throw new Error('Invalid UUID');
    return reqUuidStr;
  } catch(err) {
    throw new Error('Invalid UUID');
  }
};

export const handleHttpErrors = (
  err: { message: string; toString: () => any; }, res: ServerResponse
): void => {
  console.error(err);
  const getCrashInfo = (): [ number, string ] => {
    const crashTypes = {
      'No such endpoint!': 404,
      'Invalid UUID': 400,
      'Record with id === userId does not exist!': 404,
      'You provided an incorrect user object!': 400,
    }
    const errMsg = err.message;
    const statusCode: number = crashTypes[errMsg];
    if (statusCode === undefined) {
      return [ 500, `Corresponding human-friendly message ${err.message}` ];
    }
    return [ statusCode, errMsg ];
  };
  const [ statusCode, reason ]: [ number, string ] = getCrashInfo();
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(reason);
};
