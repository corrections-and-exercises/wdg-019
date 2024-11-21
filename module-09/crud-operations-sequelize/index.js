import express from 'express';
import './db/index.js';
import './models/index.js';
import {
    createNote,
    deleteNote,
    getNoteById,
    getNotes,
    updateNote,
} from './controllers/notes.js';

import {userRouter} from './routes/user.js';
import {notesRouter} from './routes/note.js';
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/users', userRouter);
app.use('/notes', notesRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
