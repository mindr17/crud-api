"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const usersArr = [
    {
        'id': '418c0c1d-7dca-42be-ad7a-02f6b5e3beeb',
        'username': 'Bob',
        'age': 30,
        'hobbies': [
            'skiing',
            'chess',
            'football'
        ],
    },
    {
        'id': 'c8c53c2a-53c9-452a-b7d0-dd734009ee4d',
        'username': 'Mark',
        'age': 25,
        'hobbies': [
            'skiing',
            'chess',
            'football'
        ],
    }
];
const getUsers = () => {
    return usersArr;
};
exports.getUsers = getUsers;
