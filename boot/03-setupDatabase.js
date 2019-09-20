'use strict';
const mongoose = require('mongoose');
const debug = require('debug')('corporate-website:boot:setupDatabase');
const fs = require('fs');
const path = require('path');
/**
 * Setup Database connection and initialize all models
 * @param app
 */
module.exports = function (app) {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(result => {
            debug({
                message: 'Connected to database Successfully',
                result
            });
            const modelsPath = path.resolve(path.join(__dirname, '..', 'models'));
            fs.readdirSync(modelsPath).forEach(file => {
                require(path.join(modelsPath, file));
            })
        }).catch(error => {
        console.error('Unable to Connect to Database ');
        process.exit(1);
    })
};