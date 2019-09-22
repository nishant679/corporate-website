class AppError extends Error {
    constructor(message, code) {
        super();
        this.status = code;
        this.message = message;
    }
}

module.exports = AppError;