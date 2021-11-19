

const errorHandler = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);

    res.status(404);
    next(error);
}


module.exports = errorHandler;