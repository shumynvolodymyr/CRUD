module.exports = {
    MONGO_URL: process.env.MONGO_CONNECT_URL || 'mongodb://localhost:27017/crud_app',
    PORT: process.env.PORT || 5000,

    SALT_ROUNDS: 10,
};


