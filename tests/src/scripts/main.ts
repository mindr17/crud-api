import { Control } from "./helpers/Control";
import { crudController } from "./CrudController";
import { IReqOptions } from "./types";

export const main = () => {
  const { body } = document;
  const header = new Control(body, 'header', 'header');
  const headerText = new Control(header.node, 'div', 'header__text', 'CRUD testing tool');
  const main = new Control(body, 'main', 'main');
  const crudTester = new Control(main.node, 'div', 'main__crud crud');

  const crudTop = new Control(crudTester.node, 'div', 'crud__top');
  const portText = new Control(crudTop.node, 'div', 'crudtop__text', 'Port:');
  const inputPort = new Control(crudTop.node, 'textarea', 'crudtop__port-input input');
  inputPort.node.value = 3030;
  
  const crudLeft = new Control(crudTester.node, 'div', 'crud__left');
  const crudRight = new Control(crudTester.node, 'div', 'crud__right');

  const startBtn = new Control(crudLeft.node, 'button', 'btn start', 'GET');
  startBtn.node.onclick = async () => {
    crudController.get();
  };

  const postBtn = new Control(crudLeft.node, 'button', 'btn start', 'Add user');
  postBtn.node.onclick = async () => {
    // const userObj = {
    //   'username': 'Bob',
    //   'age': 30,
    //   'hobbies': [
    //     'skiing',
    //     'chess',
    //     'football'
    //   ],
    // }

    const userObj = {
      "username": "Bob1",
      "age": 27,
      "hobbies": [
          "chess",
          "football"
      ]
    }

    
    const options: IReqOptions = {
      method: 'POST',
      url: 'http://localhost:3030/api/users/',
      reqObj: userObj,
    }
    await crudController.makeRequest(options);

    // const objectsArr = [];
    // objectsArr.length = 1000;
    // for (const [ index ] of objectsArr.entries()) {
    //   oneObj.age = index;
    //   objectsArr[index] = oneObj;
    // }

    
  };

  const postManyBtn = new Control(crudLeft.node, 'button', 'btn start', 'Add 10,000 users');
  postManyBtn.node.onclick = async () => {
    
  };
  

  const inputElem: any = new Control(crudRight.node, 'textarea', 'crud__textarea').node;
  

}
