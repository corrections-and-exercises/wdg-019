import Joi from 'joi';

export const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
});

export const postSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    userId: Joi.string().required(),
});
