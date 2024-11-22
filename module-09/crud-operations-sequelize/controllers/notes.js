import {Note} from '../models/Note.js';
import {User} from '../models/User.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getNotes = async (req, res) => {
    // include - to populate user data
    const notes = await Note.findAll({
        include: {model: User, attributes: ['firstName']},
    });
    res.json(notes);
};

export const createNote = async (req, res) => {
    const {
        body: {title, content},
    } = req;
    if (!title || !content)
        return res.status(400).json({error: 'title, and content are required'});
    const note = await Note.create(req.body);
    res.json(note);
};

export const getNoteById = async (req, res) => {
    const {
        params: {id},
    } = req;
    const note = await Note.findByPk(id);
    if (!note) throw new ErrorResponse('Note not found', 404);
    res.json(note);
};

export const updateNote = async (req, res) => {
    const {
        body: {title, author, content},
        params: {id},
    } = req;
    if (!title || !author || !content)
        return res
            .status(400)
            .json({error: 'title, author, and content are required'});
    const note = await Note.findByPk(id);
    if (!note) return res.status(404).json({error: 'Note not found'});
    await note.update(req.body);
    await note.save();
    res.json(note);
};

export const deleteNote = async (req, res) => {
    const {
        params: {id},
    } = req;
    const note = await Note.findByPk(id);
    if (!note) return res.status(404).json({error: 'Note not found'});
    await note.destroy();
    res.json({message: 'Note deleted'});
};
