'use strict';

const express = require('express');
const bodyParser = require('body-parser');
/**
 * Add All Application wide middleware here
 * @param app
 */
module.exports = function (app) {
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended: false}));
};
