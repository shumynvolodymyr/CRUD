const Joi = require('joi');

const {userRolesEnum} = require('../config');
const {regex:{EMAIL_REGEX, PASSWORD_REGEX}} = require('../config');

const createUserValidator = Joi.object({
    username: Joi
        .string()
        .required(),
    first_name: Joi
        .string()
        .required(),
    last_name: Joi
        .string()
        .required(),
    email: Joi
        .string()
        .required()
        .regex(EMAIL_REGEX),
    password: Joi
        .string()
        .min(8)
        .required()
        .regex(PASSWORD_REGEX),
    user_type: Joi
        .string()
        .allow(...Object.values(userRolesEnum)),
});

const updateUserValidator = Joi.object({
    first_name: Joi
        .string(),
    last_name: Joi
        .string(),
    email: Joi
        .string()
        .regex(EMAIL_REGEX),
    password: Joi
        .string()
        .min(8)
        .regex(PASSWORD_REGEX),
    user_type: Joi
        .string()
        .allow(...Object.values(userRolesEnum)),
});

module.exports = {createUserValidator, updateUserValidator};
