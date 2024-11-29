import './db/index.js';
import express from 'express';
import morgan from 'morgan';

import bookRouter from './routers/book.js';
import userRouter from './routers/user.js';
import {errorHandler} from './middlewares/errorHandler.js';

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/books', bookRouter);

app.use(errorHandler);

app.listen(port, () =>
    console.log(`Server is listening on http://localhost:${port}`)
);
