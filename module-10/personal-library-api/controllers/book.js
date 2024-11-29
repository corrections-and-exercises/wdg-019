import Book from '../models/Book.js';

export const createBook = async function (req, res, next) {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json({data: newBook});
};

export const getBooks = async function (req, res, next) {
    const books = await Book.find();
    res.json({data: books});
};

export const getBookById = async function (req, res, next) {
    res.json({data: req.book});
};

export const updateBook = async function (req, res, next) {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json({data: book});
};

export const deleteBook = async function (req, res, next) {
    await Book.findByIdAndDelete(req.params.id);
    res.json({message: 'book deleted'});
};
