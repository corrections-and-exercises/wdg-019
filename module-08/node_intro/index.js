const {addNumbers} = require('./commonjs.js');

console.log(addNumbers(2, 3));

const now = new Date();
console.log(now);

console.log('12'.padStart(10, '0'));

fetch('http://localhost:3000')
    .then((res) => res.json())
    .then((data) => console.log(data));
