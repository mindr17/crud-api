import request from'supertest';
import { startCluster } from '../../src/scripts/cluster';

// startCluster();

request(startCluster)
  .get('api/users')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(9999)
  .end((err, res) => {
    console.log('err: ', err);
    if (err) throw err;
  });
