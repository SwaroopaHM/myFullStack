const User = require('../models/user');


exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "Fetched all users", users: users })
    }
    catch (err) {
        const error = new Error("Failed to fetch all users", err);
        error.statusCode = 500
        next()
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)
        res.status(200).json({ message: "User fetch is successful", user: user })
    } catch (err) {
        const error = new Error("Failed to fetch the user", err);
        error.statusCode = 500;
        next()
    }
}
