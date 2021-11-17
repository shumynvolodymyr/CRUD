const {ErrorHandler, responseStatusCodes: {BAD_REQUEST, NOT_FOUND}, errorMessages} = require('../errors');
const {User} = require('../database');

module.exports = {
    checkValidBody: (validatorType) => (req, res, next) => {
        try {
            const data = req.body;
            const {error, value} = validatorType.validate(data);

            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            req.body = value;

            next();
        } catch (e) {
            next(e);
        }
    },

    searchByUserId: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const user = await User.findById({_id: userId});

            if (!user) {
                throw new ErrorHandler(errorMessages.BAD_REQUEST_NOT_FOUND, NOT_FOUND);
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    }
};
