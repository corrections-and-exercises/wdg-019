function errorHandler(err, req, res, next) {
    // process.env.NODE_ENV !== 'production' && console.error(err.stack);
    console.log(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({message: err.message});
}

export default errorHandler;
