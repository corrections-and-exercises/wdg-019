import {Note} from '../models/models.js';
import {User} from '../models/models.js';

export const getNotes = async (req, res) => {
    try {
        // include - to populate user data
        const notes = await Note.findAll({include: {model: User}});
        res.json(notes);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const createNote = async (req, res) => {
    try {
        const {
            body: {title, content},
        } = req;
        if (!title || !content)
            return res
                .status(400)
                .json({error: 'title, and content are required'});
        const note = await Note.create(req.body);
        res.json(note);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getNoteById = async (req, res) => {
    try {
        const {
            params: {id},
        } = req;
        const note = await Note.findByPk(id);
        if (!note) return res.status(404).json({error: 'Note not found'});
        res.json(note);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateNote = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteNote = async (req, res) => {
    try {
        const {
            params: {id},
        } = req;
        const note = await Note.findByPk(id);
        if (!note) return res.status(404).json({error: 'Note not found'});
        await note.destroy();
        res.json({message: 'Note deleted'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
