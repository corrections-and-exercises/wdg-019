import {pool} from '../db.js';

createPostTable();

async function createPostTable() {
    try {
        const res = await pool.query(
            'CREATE TABLE posts (id serial primary key, title varchar(255))'
        );
        console.log('table posts created');
    } catch (error) {
        console.log(error);
    }
}
