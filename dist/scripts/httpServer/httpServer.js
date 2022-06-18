"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
require("dotenv/config");
const http_1 = require("http");
const httpHelpers_1 = require("../httpHelpers");
const requestRouting_1 = require("./handlers/requestRouting");
const startServer = (processPid) => {
    try {
        const server = (0, http_1.createServer)(async (req, res) => {
            try {
                console.log(`process.pid is ${processPid}`);
                (0, httpHelpers_1.checkEndpoint)(req);
                const reqMetodUppercased = req.method;
                const reqMetod = reqMetodUppercased.toLowerCase();
                const operation = requestRouting_1.requestRouting[reqMetod];
                if (operation === undefined)
                    throw new Error('This request method is not supported!');
                const [statusCode, msg] = await operation(req);
                try {
                    res.setHeader("Access-Control-Allow-Origin", "*");
                    res.writeHead(statusCode, { "Content-Type": "application/json" });
                    res.end(msg);
                }
                catch (err) {
                }
            }
            catch (err) {
                try {
                    (0, httpHelpers_1.handleHttpErrors)(err, res);
                }
                catch (err) {
                    console.error(err);
                }
            }
        });
        const PORT = process.env.PORT || '3031';
        server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    }
    catch (err) {
        console.error(`Error in http server!\n${err}`);
    }
};
exports.startServer = startServer;
