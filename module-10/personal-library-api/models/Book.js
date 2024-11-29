import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    title: { type: String, required: [true, 'Please provide a title'] },
    author: { type: String, required: [true, 'Please provide a author'] },
    summary: { type: String, required: [true, 'Please provide a summary'] },
    isbn: { type: String, required: [true, 'Please provide a isbn'] },
    genre: { type: String, required: [true, 'Please provide a genre'] },
});

export default model('Book', bookSchema);
