"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCluster = void 0;
const cluster_1 = __importDefault(require("cluster"));
const os_1 = require("os");
const process_1 = require("process");
const httpServer_1 = require("./../scripts/httpServer/httpServer");
const startCluster = () => {
    const numCPUs = (0, os_1.cpus)().length;
    if (cluster_1.default.isPrimary) {
        console.log(`Primary ${process.pid} is running!`);
        for (let i = 0; i < numCPUs; i++) {
            cluster_1.default.fork();
        }
        cluster_1.default.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    }
    else {
        const processPid = process_1.pid;
        (0, httpServer_1.startServer)(processPid);
        console.log(`Worker ${processPid} started`);
    }
};
exports.startCluster = startCluster;
