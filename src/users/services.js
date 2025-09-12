const User = require('../models/users');

const bcrypt = require('bcrypt');

const getAllUsers = async () => {
    return await User.find({});
}

const registerUser = async (user) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
    return await User.create(user);
}

const loginUser = async (user) => {
    const foundUser = await User.findOne({ email: user.email });
    if (foundUser) {
        const passwordMatch = await bcrypt.compare(user.password, foundUser.password);
        if (passwordMatch) {
            return foundUser;
        }
    }
    return null;
}

module.exports.userServices = {
    registerUser,
    loginUser,
    getAllUsers
}