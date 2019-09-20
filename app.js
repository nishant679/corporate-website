'use strict';
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const bootScriptsPath = path.join(__dirname, 'boot');
/**
 Execute All Scripts in /boot directory alphabetically
 */
fs.readdirSync(bootScriptsPath).forEach(function (file) {
    require("./boot/" + file)(app);
});

module.exports = app;
