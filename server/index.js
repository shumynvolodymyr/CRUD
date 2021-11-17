const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const {config: {MONGO_URL, PORT}} = require('./config');
const {userRouter} = require('./routers');
const {responseStatusCodes} = require('./errors');

const app = express();

mongoose.connect(MONGO_URL).then(() => {
    console.log('Mongo connected successfully');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);
// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res.status(err.status || responseStatusCodes.SERVER)
        .json({message: err.message});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
