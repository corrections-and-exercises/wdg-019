import User from './models/User.js';
import Book from './models/Book.js';
import './db/index.js';

import {faker} from '@faker-js/faker';

const users = new Array(10).fill('').map(() => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    readingList: [],
}));

const books = new Array(10).fill('').map(() => ({
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
    summary: faker.lorem.text(),
    isbn: faker.commerce.isbn(),
    genre: faker.lorem.words(1),
}));

try {
    await User.insertMany(users);
    await Book.insertMany(books);
    console.log('db seeded');
    process.exit(0);
} catch (error) {
    console.log('seeding failed');
    console.log('error', error);
    process.exit(1);
}
