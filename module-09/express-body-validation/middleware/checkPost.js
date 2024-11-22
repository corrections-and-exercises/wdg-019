import Post from '../models/Post.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import User from '../models/User.js';

export async function checkIfPostExists(req, res, next) {
    const {
        params: {id},
    } = req;
    const post = await Post.findByPk(id, {include: User});
    if (!post) throw new ErrorResponse('Post not found', 404);
    req.post = post;
    next();
}
