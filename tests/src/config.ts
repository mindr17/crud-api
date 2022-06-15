const configTemplate = {
  "baseConfig": {
    url: 'ws://localhost:3000/',
    port: 3000,
  },
  "devConfig": {
  },
  "prodConfig": {
    // dbUrl: 'mongodb://pocmbpdzfb:WbUoHEBV1i@mongodb.cloudno.de:27017/market22';
  },
};

const configType = (process.env.NODE_ENV !== 'development') 
  ? 'devConfig'
  : 'prodConfig';

export const config = { 
  ...configTemplate['baseConfig'],
  ...configTemplate[configType],
};
