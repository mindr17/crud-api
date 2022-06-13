import { getUsers } from './scripts/usersDb';

const main = () => {
  // const users = JSON.parse(usersDbJson);
  const users = getUsers();
  console.log('users: ', users);
};
main();
