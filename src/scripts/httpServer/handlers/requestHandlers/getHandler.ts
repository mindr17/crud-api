import { usersController } from "../../../users/UsersController";

export const getHandler = (req, res) => {
  res.end('I am in getHandler file');
  // const users = usersController.users;
  // const usersStr = JSON.stringify(users);

};
