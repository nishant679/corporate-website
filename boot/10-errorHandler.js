const createError = require('http-errors');

module.exports = async function (app) {
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        const error = new Error({code: 404, message: 'No Matching Route Found'});
        error.statusCode = 404;
        next(error);
    });

    // error handler
    app.use(function (err, req, res, next) {
        console.error(err);
        // render the error page
        res.status(err.status || 500);
        res.send({
            success: false,
            message: err.message,
            error: err
        });
    });
}
