const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res, next) => {
    try {
        let hashedPw = await bcrypt.hash(req.body.password, 12)
        const user = new User({
            email: req.body.email,
            password: hashedPw,
            name: req.body.name
        })
        const result = await user.save();
        res.status(201).json({ message: "User is created", user_id: result._id })
        console.log("this is result: " + result)
    } catch (error) {
        console.log("Error while saving user : " + error)
    }
}

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log("Inside login ");

    try {
        let loadedUser;
        const user = await User.findOne({ email: email })
        if (!user) {
            const error = new Error("User email not found");
            error.statusCode = 401;
            throw error
        }
        loadedUser = user
        let isEqual = await bcrypt.compare(password, user.password)

        if (!isEqual) {
            const error = new Error("Incorrect password")
            error.statusCode = 401
            throw error
        }

        const token = jwt.sign({
            email: email,
            userId: loadedUser._id.toString()
        }, "somesupersecretsecret", { expiresIn: '1h' })
        res.status(200).json({
            message: "User successfully logged in",
            token: token,
            userId: loadedUser._id.toString()
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
          }
        next(err)
    }
}