const bcrypt = require('bcrypt');

const {config: {SALT_ROUNDS}} = require('../config');
const {ErrorHandler} = require('../errors');
const {errorMessages: {BAD_REQUEST_NOT_FOUND}, responseStatusCodes: {BAD_REQUEST}} = require('../errors');

module.exports = {
    hash: (password) => bcrypt.hash(password, SALT_ROUNDS),
    compare: async (password, hashPassword) => {
        const isPasswordMatch = await bcrypt.compare(password, hashPassword);

        if (!isPasswordMatch) {
            throw new ErrorHandler(BAD_REQUEST_NOT_FOUND, BAD_REQUEST);
        }
    }
};
