"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const httpServer_1 = require("./scripts/httpServer/httpServer");
const single = () => {
    const processPid = process_1.pid;
    (0, httpServer_1.startServer)(processPid);
};
single();
