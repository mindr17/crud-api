"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = require("./scripts/cluster");
const main = () => {
    (0, cluster_1.startCluster)();
};
main();
