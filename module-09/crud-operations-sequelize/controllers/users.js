import {User} from '../models/models.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const createUser = async (req, res) => {
    try {
        const {
            body: {firstName, lastName, email},
        } = req;

        if (!firstName || !lastName || !email) {
            return res
                .status(400)
                .json({error: 'firstName, lastName and email are required'});
        }

        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getUserById = async (req, res) => {
    try {
        const {
            params: {id},
        } = req;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({error: 'User not found'});
        res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateUser = async (req, res) => {
    try {
        const {
            body: {firstName, lastName, email},
            params: {id},
        } = req;
        if (!firstName || !lastName || !email) {
            return res
                .status(400)
                .json({error: 'firstName, lastName and email are required'});
        }

        const user = await User.findByPk(id);
        user.update(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteUser = async (req, res) => {
    const {
        params: {id},
    } = req;
    try {
        const user = await User.findByPk(id);
        await user.destroy();
        res.json({message: 'User deleted'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
