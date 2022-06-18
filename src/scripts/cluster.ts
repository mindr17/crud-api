import cluster from 'cluster';
import { cpus } from 'os';
import { pid } from 'process';
import { startServer } from './../scripts/httpServer/httpServer';

export const startCluster = () => {
  const numCPUs = cpus().length;
  
  if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running!`);
  
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    const processPid = pid;
    startServer(processPid);
  
    console.log(`Worker ${processPid} started`);
  }
};
