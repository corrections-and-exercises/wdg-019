import {Router} from 'express';
import {
    getUserById,
    getUsers,
    updateUser,
    createUser,
    deleteUser,
} from '../controllers/users.js';

export const userRouter = Router();

userRouter.route('/').get(getUsers).post(createUser);

userRouter.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
