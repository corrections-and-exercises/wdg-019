import User from '../models/User.js';

export const createUser = async function (req, res) {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({data: newUser});
};

export const getUsers = async function (req, res) {
    const user = await User.find().populate('readingList.bookRefId');
    res.json({data: user});
};

export const getUserById = async function (req, res, next) {
    res.json({data: req.user});
};

export const updateUser = async function (req, res, next) {
    const book = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json({data: book});
};

export const deleteUser = async function (req, res, next) {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'user deleted'});
};

export const addBookToReadingList = async function (req, res) {
    const updatedUser = await User.findById(req.params.id);

    const alreadyInList = updatedUser.readingList.some(
        (el) => el.bookRefId == req.body.bookRefId
    );
    if (alreadyInList) {
        return res.json({message: 'book already in the list'});
    }

    updatedUser.readingList.push({bookRefId: req.body.bookRefId});
    await updatedUser.save();
    res.json({data: updatedUser});
};

export const changeBookStatusInReadlinglist = async function (req, res) {
    const updatedUser = await User.findById(req.params.id);
    const {status: newStatus} = req.body;
    const bookIdInList = updatedUser.readingList.findIndex(
        (el) => el.bookRefId.toString() === req.params.bookId
    );

    updatedUser.readingList[bookIdInList].status = newStatus;

    await updatedUser.save();
    res.json(updatedUser);
};

export const removeBookFromReadingList = async function (req, res) {
    const updatedUser = await User.findById(req.params.id);
    const bookId = req.params.bookId;

    const bookIdInList = updatedUser.readingList.findIndex(
        (el) => el.bookRefId.toString() === bookId
    );
    updatedUser.readingList.splice(bookIdInList, 1);
    await updatedUser.save();
    res.json({data: updatedUser});
};
