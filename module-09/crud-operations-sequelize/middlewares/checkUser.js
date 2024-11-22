import {User} from '../models/User.js';
import ErrorResponse from '../utils/ErrorResponse.js';
export async function checkIfUserExits(req, res, next) {
    const {
        params: {id},
    } = req;
    const user = await User.findByPk(id);
    if (!user) throw new ErrorResponse('User not found', 404);
    req.user = user;
    next();
}
