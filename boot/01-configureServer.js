'use strict';

const logger = require('morgan');
const fs = require('fs');
const path = require('path');
/**
 * This Script will
 * 1. Setup environment variables
 * 2. Setup Logging using morgan
 * @param app
 */
module.exports = async function (app) {
    app.use(logger('dev'));
    try {
        fs.accessSync(path.join(__dirname, '..', '.env'), fs.R_OK);
        require('dotenv').config()
    } catch (e) {
        console.error('".env" Not Found. Copy ".env.example" to ".env" file');
        process.exit(1);
    }
};
