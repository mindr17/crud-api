"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttpErrors = exports.getUuidStr = exports.checkEndpoint = exports.getReqBodyObj = exports.getUserObj = void 0;
const uuid_1 = require("uuid");
const getUserObj = (body) => {
    try {
        const bodyObj = JSON.parse(body);
        if (Object.keys(bodyObj).length < 3) {
            throw new Error('You provided an incorrect user object!');
        }
        const { username, age, hobbies } = bodyObj;
        if (typeof username !== 'string') {
            throw new Error('You provided an incorrect user object!');
        }
        if (typeof age !== 'number') {
            throw new Error('You provided an incorrect user object!');
        }
        if (!Array.isArray(hobbies)) {
            throw new Error('You provided an incorrect user object!');
        }
        hobbies.forEach((someHobbie) => {
            if (typeof someHobbie !== 'string') {
                throw new Error('You provided an incorrect user object!');
            }
        });
        return bodyObj;
    }
    catch (err) {
        throw new Error('You provided an incorrect user object!');
    }
};
exports.getUserObj = getUserObj;
const getReqBodyObj = async (req) => {
    const bodyArr = [];
    req.on("data", chunk => {
        bodyArr.push(chunk);
    });
    await new Promise((resolve, reject) => {
        req.on("end", () => {
            resolve('done');
        });
    });
    const body = Buffer.concat(bodyArr).toString();
    const bodyObj = (0, exports.getUserObj)(body);
    return bodyObj;
};
exports.getReqBodyObj = getReqBodyObj;
const checkEndpoint = (req) => {
    const reqUrl = req.url;
    if (!reqUrl.startsWith('/api/users')) {
        throw new Error('No such endpoint!');
    }
};
exports.checkEndpoint = checkEndpoint;
const getUuidStr = (req) => {
    try {
        const reqUrl = req.url;
        const reqUuidStr = reqUrl.substring(11, reqUrl.length);
        const uuidIsCorrect = (0, uuid_1.validate)(reqUuidStr);
        if (!uuidIsCorrect)
            throw new Error('Invalid UUID');
        return reqUuidStr;
    }
    catch (err) {
        throw new Error('Invalid UUID');
    }
};
exports.getUuidStr = getUuidStr;
const handleHttpErrors = (err, res) => {
    console.error(err);
    const getCrashInfo = () => {
        const crashTypes = {
            'No such endpoint!': 404,
            'Invalid UUID': 400,
            'Record with id === userId does not exist!': 404,
            'You provided an incorrect user object!': 400,
        };
        const errMsg = err.message;
        const statusCode = crashTypes[errMsg];
        if (statusCode === undefined) {
            return [500, `Corresponding human-friendly message ${err.message}`];
        }
        return [statusCode, errMsg];
    };
    const [statusCode, reason] = getCrashInfo();
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(reason);
};
exports.handleHttpErrors = handleHttpErrors;
