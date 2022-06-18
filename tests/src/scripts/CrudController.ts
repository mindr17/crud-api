import { IReqOptions } from "./types";

class CrudController {
  private _reqOptions: IReqOptions;

  constructor() {
    this._reqOptions;
  }

  public addRecords() {
    
  }

  public async get() {
    // await this.makeRequest(options);
    const responseObj = await fetch('http://localhost:3030/api/users/');
    const resJson = await responseObj.json();
  }

  public async makeRequest(options: IReqOptions): Promise<string> {
    const userObj = {
      "username": "Bob1",
      "age": 27,
      "hobbies": [
          "chess",
          "football"
      ]
    };
    const response = await fetch('http://localhost:3030/api/users/', {
      method: 'POST',
      body: JSON.stringify(userObj)
    });
    const resJson = await response.json();

    return resJson;
  }
}

export const crudController = new CrudController();
