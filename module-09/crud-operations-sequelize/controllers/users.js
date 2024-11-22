import {User} from '../models/User.js';

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
        res.json(req.user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateUser = async (req, res) => {
    try {
        const {
            body: {firstName, lastName, email},
        } = req;
        if (!firstName || !lastName || !email) {
            return res
                .status(400)
                .json({error: 'firstName, lastName and email are required'});
        }

        req.user.update(req.body);
        await req.user.save();
        res.json(req.user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteUser = async (req, res) => {
    try {
        await req.user.destroy();
        res.json({message: 'User deleted'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
