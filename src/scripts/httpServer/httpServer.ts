import 'dotenv/config'
import { createServer } from 'http';
import { requestRouting } from './handlers/requestRouting';

export const startServer = (): void => {
  const server = createServer((req, res): void => {
    try {
      const reqUrl = req.url;
      if (!reqUrl.startsWith('api/users')) throw new Error('No such endpoint!')
      const reqMetodUppercased = req.method;
      const reqMetod = reqMetodUppercased.toLowerCase();
      console.log('reqMetod: ', reqMetod);

      const operation = requestRouting[reqMetod];
      if (operation === undefined) throw new Error('This request method is not supported!')
      operation(req, res);

      
      // res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(200, { "Content-Type": "application/json" });
      
      // const users = usersModel.users;
      // const usersStr = JSON.stringify(users);
      // res.end(usersStr);
  
      console.log(req);
    } catch(err) {
      try {
        console.error(err);
        const errStr = err.toString();
        res.end(errStr);
      } catch(err) {
        console.error(err);
      }
    }
  });
  
  const PORT: string = process.env.PORT || '3031';
  
  server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};
