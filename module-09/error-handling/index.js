import express from 'express';
const app = express();
import {readFile} from 'fs';
import ErrorResponse from './utils/ErrorResponse.js';
import errorHandler from './middleware/errorHandler.js';

app.get('/', (req, res) => {
    throw new ErrorResponse('Something went wrong', 418);
});

app.get('/error-from-callback', (req, res, next) => {
    readFile('/maybe-valid-file', 'utf-8', (err, data) => {
        if (err) {
            return next(err);
        }
        return res.send(data);
    });
});

app.get('/error-from-promise', async (req, res, next) => {
    throw new ErrorResponse('failed with promise', 418);
});

app.use(errorHandler);

app.listen(3000, () =>
    console.log('Server is running on http://localhost:3000')
);
