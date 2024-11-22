// import http from 'http';
import express from 'express';
import {pool} from './db.js';

const app = express();

app.use(express.json());

const posts = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
];

// app.get('/', (req, res) => res.send('Hello World'));

app.get('/posts', async (req, res) => {
    try {
        const {rows} = await pool.query(`SELECT * FROM posts`);
        console.log(rows);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/posts', async (req, res) => {
    // console.log(req.body);
    // const newPost = {id: 3, title: req.body.title};
    // posts.push(newPost);
    const {title} = req.body;
    console.log('title', title);

    // try {
    const {rows} = await pool.query(
        `INSERT INTO post (title) VALUES ($1) RETURNING *;`,
        [title]
    );
    console.log(rows);
    res.json(rows);
    // } catch (error) {
    //     console.log(error);
    //     res.sendStatus(500);
    // }

    // res.status(201).json({message: 'New Post created'});
});

app.get('/posts/:id', (req, res) => {
    const post = posts.find((post) => post.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({message: 'Post not found'});
    }
    res.json(post);
});

app.put('/posts/:id', (req, res) => res.json({message: 'Put a post by id'}));

app.delete('/posts/:id', (req, res) =>
    res.json({message: 'Delete a post by id'})
);

const port = process.env.PORT || 3000;

// const server = http.createServer(requestHandler);

// function requestHandler(req, res) {
//     if (req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Hello World!');
//     } else {
//         res.writeHead(405, {'Content-Type': 'text/plain'});
//         res.end('Not Allowed');
//     }
// }

app.listen(port, () => console.log('server is listening'));
