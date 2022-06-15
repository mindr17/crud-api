export interface IUser {
  id?: string;
  username: string;
  age: number;
  hobbies: Array<string | null>;
}

export type handlerResult = [ number, string ];

export type newUserType = {
  username: string;
  age: number;
  hobbies: Array<string | null>;
}