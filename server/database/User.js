const {Schema, model} = require('mongoose');
const {databaseTablesEnum: {USERS}, userRolesEnum} = require('../config');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        trim: true,
        minlength: 8
    },
    user_type: {
        type: String,
        default: userRolesEnum.DRIVER,
        enum: Object.values(userRolesEnum)
    }
},{timestamps: true, versionKey: false});

module.exports = model(USERS, userSchema);
