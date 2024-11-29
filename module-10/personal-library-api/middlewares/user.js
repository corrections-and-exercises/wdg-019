import ErrorResponse from '../utils/ErrorResponse.js';
import User from '../models/User.js';

export const doesUserExist = async function (req, res, next) {
    const user = await User.findById(req.params.id);
    if (!user) throw new ErrorResponse('User not found', 404);
    req.user = user;
    next();
};
