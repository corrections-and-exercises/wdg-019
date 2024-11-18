import pkg from 'pg';
const {Pool} = pkg;

export const pool = new Pool({
    connectionString: process.env.PG_CONNECTION_STRING,
});
