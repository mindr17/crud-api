import 'dotenv/config';
import request from'supertest';
import { startCluster } from '../../src/scripts/cluster';

// startCluster();
const app = startCluster;

request(app)
  .get('/api/users')
  .expect(200)
  .end((err, res) => {
    console.log('err: ', err);
    if (err) throw err;
  });
