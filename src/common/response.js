const createError = require('http-errors');

module.exports.Response = {
    success: (res, status = 200, message = 'Success', data) => {
        res.status(status).json({
            message,
            data
        });
    },
    error: (res, error = null) => {
        const {statusCode, message} = error ? error : new createError.InternalServerError();
        const status = statusCode || 500;
        res.status(status).json({message});
    }
}