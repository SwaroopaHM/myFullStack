const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authorized = req.get("Authorization");

    if (!authorized) {
        const error = new Error("Not authenticated");
        error.statusCode = 401;
        throw error
    }

    const token = authorized.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersecretsecret')
    } catch(err) {
        error.statusCode = 500;
        throw error
    }

    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
      }
      req.userId = decodedToken.userId;
      next();
}