import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName: { type: String, required: [true, 'Please provide a firstName'] },
    lastName: { type: String, required: [true, 'Please provide a lastName'] },
    readingList: [
        {
            bookRefId: { type: Schema.Types.ObjectId, ref: 'Book' },
            status: {
                type: String,
                enum: ['read', 'in-progress', 'not-started'],
                default: 'not-started',
            },
        },
    ],
});

export default model('User', userSchema);
