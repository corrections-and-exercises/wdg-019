import ErrorResponse from '../utils/ErrorResponse.js';

function validateJoi(schema) {
    return (req, res, next) => {
        const {error} = schema.validate(req.body);
        return error ? next(new ErrorResponse(error, 400)) : next();
    };
}

export default validateJoi;
