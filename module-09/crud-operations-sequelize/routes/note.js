import {Router} from 'express';
import {
    createNote,
    deleteNote,
    getNoteById,
    getNotes,
    updateNote,
} from '../controllers/notes.js';

export const notesRouter = Router();

notesRouter.route('/').get(getNotes).post(createNote);
notesRouter.route('/:id').get(getNoteById).put(updateNote).delete(deleteNote);
