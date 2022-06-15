import { Control } from "./helpers/Control";
import { crudController } from "./CrudController";
import { IReqOptions } from "./types";

export const main = () => {
  const { body } = document;
  const header = new Control(body, 'header', 'header');
  const headerText = new Control(header.node, 'div', 'header__text', 'CRUD testing tool');
  const main = new Control(body, 'main', 'main');
  const crudTester = new Control(main.node, 'div', 'main__crud crud');

  const crudLeft = new Control(crudTester.node, 'div', 'crud__left');
  const crudRight = new Control(crudTester.node, 'div', 'crud__right');

  const startBtn = new Control(crudLeft.node, 'button', 'btn start', 'GET');
  startBtn.node.onclick = () => {
    crudController.addRecords();
  };

  const getBtn = new Control(crudLeft.node, 'button', 'btn start', 'Add 1000 users');
  startBtn.node.onclick = () => {
    const options: IReqOptions = {
      type: 'POST',
      url: '',
      reqObj: {
        
      },
    }
    crudController.get(options);
  };

  const inputElem: any = new Control(crudRight.node, 'textarea', 'crud__textarea').node;
  

}
