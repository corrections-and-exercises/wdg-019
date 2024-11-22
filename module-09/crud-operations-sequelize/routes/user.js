import {Router} from 'express';
import {
    getUserById,
    getUsers,
    updateUser,
    createUser,
    deleteUser,
} from '../controllers/users.js';
import {logger} from '../middlewares/logger.js';
import {checkIfUserExits} from '../middlewares/checkUser.js';

export const userRouter = Router();

userRouter.use((req, res, next) => {
    console.log('request on /user');
    next();
});
userRouter.route('/').get(getUsers).post(logger, createUser);

userRouter
    .route('/:id')
    .get(checkIfUserExits, getUserById)
    .put(checkIfUserExits, updateUser)
    .delete(logger, checkIfUserExits, deleteUser);
