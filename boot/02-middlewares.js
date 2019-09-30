'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
/**
 * Add All Application wide middleware here
 * @param app
 */
module.exports = async function (app) {
    app.use(cors({
        maxAge: 24 * 60 * 60 * 30 * 12,
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
};
