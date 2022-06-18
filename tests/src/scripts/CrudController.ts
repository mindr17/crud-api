import { IReqOptions } from "./types";

class CrudController {
  private _reqOptions: IReqOptions;

  constructor() {
    this._reqOptions;
  }

  public addRecords() {
    
  }

  public async get(options) {
    const { url } = options;
    const responseObj = await fetch(url);
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
    const { url } = options;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userObj)
    });
    const resJson = await response.json();

    return resJson;
  }
}

export const crudController = new CrudController();
