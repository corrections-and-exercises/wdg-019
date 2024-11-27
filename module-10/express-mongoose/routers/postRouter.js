import { Router } from 'express';
import { createPost, deletePost, getPostById, getPosts, updatePost } from '../controllers/posts.js';

const postRouter = Router();

postRouter.route('/').get(getPosts).post(createPost);
postRouter.route('/:id').get(getPostById).put(updatePost).delete(deletePost);

export default postRouter;
