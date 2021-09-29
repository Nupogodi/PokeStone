const notFound = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);

    res.json({
        msg: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
    });

}

module.exports = notFound;