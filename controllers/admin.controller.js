const {AdminModel} = require('../models/admin.model');
const crypt = require('crypto');

exports.login = async function (req, res, next) {
    const admin = await AdminModel.findOne({
        email: req.body.email
    });
    try {
        if (admin && admin.validPassword(req.body.password)) {
            res.json({
                _id: admin._id,
                email: admin.email,
                token: admin.getToken()
            });
        } else {
            next(new Error('Invalid Email / Password'))
        }
    } catch (e) {
        console.error(e)
    }
};