const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
    return (req, res, next) => {
        try {
            const data = req[property];
            const { error } = schema.validate(data, { abortEarly: false });
            if (error) {
                const detailedError = error.details.map(detail => detail.message).join(', ');
                throw boom.badRequest(detailedError);
            }
            next();
        } catch (err) {
            next(err);
        }
    };
}

module.exports = validatorHandler;