'use strict';
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const bootScriptsPath = path.join(__dirname, 'boot');
/**
 Execute All Scripts in /boot directory alphabetically
 */
//Require All Bootscripts
const bootScripts = [];
fs.readdirSync(bootScriptsPath).forEach(function (file) {
    bootScripts.push(require("./boot/" + file)(app));
});
//Execute boot scripts sequentially
bootScripts.reduce(
    (current, next) =>
        current.then(_ => next),
    Promise.resolve()
);

module.exports = app;
