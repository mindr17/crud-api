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

  const reqCountHeader = new Control(crudTop.node, 'div', 'crudtop__text', 'Requests count:');
  const reqCountText: any = new Control(crudTop.node, 'textarea', 'crudtop__port-input input');
  reqCountText.node.value = 100;
  
  const crudLeft = new Control(crudTester.node, 'div', 'crud__left');
  const crudRight = new Control(crudTester.node, 'div', 'crud__right');

  const startBtn = new Control(crudLeft.node, 'button', 'btn start', 'GET');
  startBtn.node.onclick = async () => {
    crudController.get();
  };

  // const outputShowText = new Control(crudRight.node, 'div', '', 'Show output?');
  // const outputShowInput = new Control(crudRight.node, 'input', '');

  const outputTimeWrapper = new Control(crudRight.node, 'div', 'crud__time', 'The request took ');
  const timeValueElem = new Control(outputTimeWrapper.node, 'div', 'crud__time-value');
  const outputTimeTextAfterElem = new Control(outputTimeWrapper.node, 'span', '', 'ms to complete');
  
  // const outputResElem = new Control(crudRight.node, 'textarea', 'crud__textarea');
  
  const postBtn = new Control(crudLeft.node, 'button', 'btn start', 'Add one user');
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
      ],
    };

    
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

  const postManyBtn = new Control(crudLeft.node, 'button', 'btn start', `Add "requests count" users`);
  postManyBtn.node.onclick = async () => {
    const userObj = {
      "username": "Bob1",
      "age": 27,
      "hobbies": [
          "chess",
          "football"
      ],
    };

    const reqOptions: IReqOptions = {
      method: 'POST',
      url: 'http://localhost:3030/api/users/',
      reqObj: userObj,
    };
    
    const reqCount = Number(reqCountText.node.value);
    const dateStart = new Date();

    const promises = [];
    promises.length = reqCount;
    for (let i = 0; i < reqCount; i++) {
      const reqPromise = crudController.makeRequest(reqOptions);
      promises.push(reqPromise);
    }
    const result = await Promise.all(promises);

    const dateEnd = new Date();
    timeValueElem.node.textContent = `${Number(dateEnd) - Number(dateStart)}`;

  };
};
