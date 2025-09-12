const {userServices} = require('./services');
const {Response} = require('../common/response');

const getAllUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUsers();
        Response.success(res, 200, 'Users retrieved successfully', users);
    } catch (error) {
        Response.error(res, error);
    }
}

const registerUser = async (req, res) => {
    try {
        const {fullName, email, password} = req.body;
        const user = await userServices.registerUser({fullName, email, password});
        Response.success(res, 200, 'User registered successfully', user);
    } catch (error) {
        Response.error(res, error);
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userServices.loginUser({email, password});
        Response.success(res, 200, 'User logged in successfully', user);
    } catch (error) {
        Response.error(res, error);
    }
}

module.exports.userController = {
    registerUser,
    loginUser,
    getAllUsers
}
