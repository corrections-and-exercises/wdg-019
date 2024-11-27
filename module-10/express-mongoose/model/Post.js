import {Schema, model} from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {type: Date, default: Date.now},
});

export default model('Post', postSchema);
