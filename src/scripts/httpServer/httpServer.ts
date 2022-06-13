import 'dotenv/config'
import { createServer } from 'http';
import { usersModel } from '../users/UsersModel';

export const startServer = () => {
  const server = createServer((req, res) => {
    const reqUrl = req.url;
    
    // reqUrl
    
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    
    const users = usersModel.users;
    res.end(users);

    console.log(req);
  });
  
  const PORT = process.env.PORT || 3031;
  
  server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};
