import express from 'express';
import './db/index.js';
import './models/index.js';
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';

import {userRouter} from './routes/user.js';
import {notesRouter} from './routes/note.js';

const app = express();

app.use(
    cors({
        origin: '*',
    })
);
app.use(morgan('dev'));
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/users', userRouter);
app.use('/notes', notesRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
