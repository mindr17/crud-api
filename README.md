# Nodejs CRUD api
## Running
### Install
```bash
git checkout crud-api && npm i
```
### Start in development mode
```bash
npm run start:dev
```
### Start in production mode
```bash
npm run start:prod
```
### Start in production mode (single thread)
```bash
npm run start:prod-single
```
### Default port is 5555. You can change port in `.env` file.
```bash
code .env
```
## Testing
<!-- ### Supertest: 3 scenarios
```bash
npm run test
```
```bash
npm run test2
```
```bash
npm run test3
``` -->

### Postman config
```bash
code tests/postman/postman-config.json
```
### Running tests in browser http://localhost:8080/
```bash
cd tests && npm i && npm run start
```
