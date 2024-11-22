import {Router} from 'express';
import {
    createPost,
    deletePost,
    getPostById,
    getPosts,
    updatePost,
} from '../controllers/posts.js';
import validateJoi from '../middleware/validateJoi.js';
import {postSchema} from '../joi/schemas.js';
import {checkIfPostExists} from '../middleware/checkPost.js';

const postRouter = Router();

postRouter.route('/').get(getPosts).post(validateJoi(postSchema), createPost);
postRouter
    .route('/:id')
    .get(checkIfPostExists, getPostById)
    .put(validateJoi(postSchema), checkIfPostExists, updatePost)
    .delete(checkIfPostExists, deletePost);

export default postRouter;
