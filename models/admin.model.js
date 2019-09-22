const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const ADMIN_MODEL = 'AdminModel';
const AdminSchema = new Schema({
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        salt: {
            type: String
        }
    },
    {
        timestamps: true
    });

AdminSchema.methods.setPassword = function (password) {

    // Creating a unique salt for a particular user 
    this.salt = crypto.randomBytes(16).toString('hex');

    // Hashing user's salt and password with 1000 iterations, 
    this.password = crypto.pbkdf2Sync(password, this.salt,
        1000, 64, `sha512`).toString(`hex`);
};

AdminSchema.methods.validPassword = function (password) {
    const hash = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.password === hash;
};

AdminSchema.methods.getToken = function () {
    console.log({email: this.email, secret: process.env.JWT_SECRET})
    return jwt.sign({
        _id: this._id.toString(),
        email: this.email,
        time: Date.now()
    }, process.env.JWT_SECRET, {algorithm: 'HS256'});
};

const AdminModel = mongoose.model(ADMIN_MODEL, AdminSchema);

module.exports = {AdminModel, ADMIN_MODEL};