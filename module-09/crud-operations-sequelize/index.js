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
import {
    getUserById,
    getUsers,
    updateUser,
    createUser,
    deleteUser,
} from './controllers/users.js';

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.route('/users').get(getUsers).post(createUser);
app.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

app.route('/notes').get(getNotes).post(createNote);
app.route('/notes/:id').get(getNoteById).put(updateNote).delete(deleteNote);

app.listen(port, () => console.log(`Server is running on port ${port}`));
