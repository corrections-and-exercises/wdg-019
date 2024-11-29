import {Router} from 'express';
import {
    addBookToReadingList,
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    removeBookFromReadingList,
    changeBookStatusInReadlinglist,
    updateUser,
} from '../controllers/user.js';
import {doesUserExist} from '../middlewares/user.js';

const userRouter = Router();

userRouter.route('/').get(getUsers).post(createUser);

userRouter
    .route('/:id')
    .get(doesUserExist, getUserById)
    .put(doesUserExist, updateUser)
    .delete(doesUserExist, deleteUser);

userRouter.route('/:id/books').post(addBookToReadingList);

userRouter
    .route('/:id/books/:bookId')
    .patch(changeBookStatusInReadlinglist)
    .delete(removeBookFromReadingList);

export default userRouter;
