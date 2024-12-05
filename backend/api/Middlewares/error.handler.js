function boomHandlerLogError(err, req, res, next) {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    } else {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {boomHandlerLogError}