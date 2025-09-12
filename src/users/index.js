const express = require('express');
const router = express.Router();

const { userController } = require('./controller');


router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/', userController.getAllUsers);

module.exports.userAPIRoutes = (app) => {
    app.use('/users', router);
}
