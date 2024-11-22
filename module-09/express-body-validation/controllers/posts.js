import Post from '../models/Post.js';
import User from '../models/User.js';

export const getPosts = async (req, res) => {
    const posts = await Post.findAll({include: User});
    res.json(posts);
};

export const createPost = async (req, res) => {
    const post = await Post.create(req.body);
    const user = await post.getUser();
    post.dataValues.user = user;
    res.json(post);
};

export const getPostById = async (req, res) => {
    res.json(req.post);
};

export const updatePost = async (req, res) => {
    const post = req.post;
    await post.update(req.body);
    res.json(post);
};

export const deletePost = async (req, res) => {
    await req.post.destroy();
    res.json({message: 'Post deleted'});
};
