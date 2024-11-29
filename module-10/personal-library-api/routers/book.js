import { Router } from 'express';
import {
    createBook,
    deleteBook,
    getBookById,
    getBooks,
    updateBook,
} from '../controllers/book.js';
import { doesBookExist } from '../middlewares/book.js';

const bookRouter = Router();

bookRouter.route('/').get(getBooks).post(createBook);

bookRouter
    .route('/:id')
    .get(doesBookExist, getBookById)
    .put(doesBookExist, updateBook)
    .delete(doesBookExist, deleteBook);

export default bookRouter;
