const jwt = require('jsonwebtoken');

const IsAuthenticated = function (req, res, next) {
    const jwtToken = req.headers['authorization'];
    let admin = {};
    try {
        admin = jwt.verify(jwtToken, process.env.JWT_SECRET);
    } catch (e) {
        next(e)
    }
    req.app.admin = admin;
    next();
};

module.exports = IsAuthenticated;