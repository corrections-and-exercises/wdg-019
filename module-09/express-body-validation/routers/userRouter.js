import {Router} from 'express';
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser,
} from '../controllers/users.js';
import validateJoi from '../middleware/validateJoi.js';
import {userSchema} from '../joi/schemas.js';
import {checkIfUserExists} from '../middleware/checkUser.js';

const userRouter = Router();

userRouter.route('/').get(getUsers).post(validateJoi(userSchema), createUser);
userRouter
    .route('/:id')
    .get(checkIfUserExists, getUserById)
    .put(validateJoi(userSchema), checkIfUserExists, updateUser)
    .delete(checkIfUserExists, deleteUser);

export default userRouter;
