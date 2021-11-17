const router = require('express').Router();

const {userController} = require('../controller');
const {userMiddleware: {checkValidBody, searchByUserId}} = require('../middleware');
const {userValidator: {createUserValidator, updateUserValidator}} = require('../validators');

router.get('/', userController.getUsers);
router.post('/', checkValidBody(createUserValidator), userController.postUser);
router.put('/:userId', searchByUserId, checkValidBody(updateUserValidator), userController.updateUser);
router.delete('/:userId', searchByUserId, userController.deleteUser);

module.exports = router;
