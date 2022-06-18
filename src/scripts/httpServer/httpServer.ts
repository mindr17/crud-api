import 'dotenv/config'
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { checkEndpoint, handleHttpErrors } from '../httpHelpers';
import { requestRouting } from './handlers/requestRouting';
import { pid } from 'process';

export const startServer = (): void => {
  try {
    const server = createServer(async (
      req: IncomingMessage, res: ServerResponse
      ): Promise<void> => {
        try {
        const processPid = pid;
        console.log(`process.pid is ${processPid}`);
        
        checkEndpoint(req);
  
        const reqMetodUppercased: string = req.method;
        const reqMetod: string = reqMetodUppercased.toLowerCase();
        const operation = requestRouting[reqMetod];
        if (operation === undefined) throw new Error('This request method is not supported!')
        const [ statusCode, msg ]: [number, string] = await operation(req);
  
        try {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.writeHead(statusCode, { "Content-Type": "application/json" });
          res.end(msg);
        } catch(err) {

        }
      } catch(err) {
        try {
          handleHttpErrors(err, res);
        } catch(err) {
          console.error(err);
        }
      }
    });
    
    const PORT: string = process.env.PORT || '3031';
    server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch(err) {
    console.error(`Error in http server!\n${err}`)
  }
};
