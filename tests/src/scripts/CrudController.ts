import { IReqOptions } from "./types";

class CrudController {
  private _reqOptions: IReqOptions;

  constructor() {
    this._reqOptions;
  }

  public addRecords() {
    
  }

  public async get(options) {
    // await this.makeRequest(options);
    const responseObj = await fetch("https://localhost:3030/");
  }

  public async makeRequest(options: IReqOptions) {
    const { type, url, reqObj } = options;
    const responseObj = await fetch("https://localhost:3030/", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Accept": "application/json"
      },
      body: JSON.stringify(reqObj),
    });
    const responseJson = responseObj.json();
    console.log('responseJson: ', responseJson);
  }

}

export const crudController = new CrudController();
