import User from '../models/User.js';

export const getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

export const createUser = async (req, res) => {
    const {
        body: {email},
    } = req;

    const found = await User.findOne({where: {email}});
    if (found) throw new Error('User with that email already exists');

    const user = await User.create(req.body);
    res.json(user);
};

export const getUserById = async (req, res) => {
    res.json(req.user);
};

export const updateUser = async (req, res) => {
    const user = req.user;
    await user.update(req.body);
    res.json(user);
};

export const deleteUser = async (req, res) => {
    await req.user.destroy();
    res.json({message: 'User deleted'});
};
