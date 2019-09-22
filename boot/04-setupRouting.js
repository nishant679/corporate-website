'use strict';

const path = require('path');
const express = require('express');
const apiRouter = require('../routes/index');

/**
 * Setup Routing for api and react production build
 * @param app
 */
module.exports = async function (app) {
    app.use('/api', apiRouter);
    app.use('/public', express.static(path.join(__dirname, '..', 'public')));

    /**
     * In Production Mode serve build react files
     */
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
        });
    }
};
