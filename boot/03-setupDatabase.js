'use strict';
const mongoose = require('mongoose');
const debug = require('debug')('corporate-website:boot:setupDatabase');
const fs = require('fs');
const path = require('path');
/**
 * Setup Database connection and initialize all models
 * @param app
 */
module.exports = async function (app) {
    try {
        const result = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        debug({
            message: 'Connected to database Successfully',
            result
        });
    } catch (e) {
        console.error('Unable to Connect to Database ');
        process.exit(1);
    }
};