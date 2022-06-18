import { pid } from 'process';
import { startServer } from "./scripts/httpServer/httpServer";

const single = (): void => {
  const processPid = pid;
  startServer(processPid);
};
single();
