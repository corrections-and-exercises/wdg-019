// console.log('hello world');

// const numArr = [1, 2, 3, 4, 5];

// numArr.forEach((x) => console.log('no ' + x * 2));

// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i]);
// }

// function multiplyBy2(x) {
//     return x * 2;
// }

// const newNumArr = numArr.map(multiplyBy2);

// console.log(newNumArr);

// function outerFunction(cb) {
//     console.log('outerfunction');
//     cb();
// }

// function greeting() {
//     console.log('hello ');
// }

// const greeting2 = function () {
//     console.log('salut');
// };

// const greeting3 = () => {
//     console.log('ciao');
//     console.log('world');
//     return 5;
// };

// outerFunction(() => console.log('inner function '));

// outerFunction(greeting);

// greeting2();

// greeting3();

// console.log(newNumArr.filter((x) => x % 2 === 0));

const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// function log(element) {
//     console.log(element);
// }
const log = function (element) {
    console.log(element);
};
log('hello');

numbers.forEach(log);

function customForEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

customForEach([1, 2, 3, 4], (el) => console.log(el));

customForEach([1, 2, 3, 4], (el) => console.log(`No: ${el}`));

let sum = 0;

numbers.forEach(function sumNumbers(x) {
    sum = sum + x;
});

// numbers.forEach((x) => (sum += x));

console.log('sum', sum);

let squaredNumbers = [];

// numbers.forEach((x) => squaredNumbers.push(x * x));
numbers.forEach((x, i) => (squaredNumbers[i] = x * x));
console.log('squaredNumbers', squaredNumbers);

// map

const doubledNumbers = numbers.map((x) => x * 2);

console.log('doubled', doubledNumbers);

const stringNumbers = numbers.map((x) => `Number: ${x}`);

console.log('string', stringNumbers);

const numberObjects = numbers.map((x) => ({original: x, squared: x * x}));

const numbersObjects2 = numbers.map(function createObjects(x) {
    return {original: x, squared: x * x};
});

console.log(numberObjects);
console.log(numbersObjects2);

const numbers2 = [5, 10, 15, 20, 25, 30];

const numbersGreaterThan15 = numbers2.filter((x) => x > 15);

console.log('>15', numbersGreaterThan15);

const students = [
    {name: 'Alice', grade: 85},
    {name: 'Bob', grade: 92},
    {name: 'Charlie', grade: 78},
    {name: 'David', grade: 88},
    {name: 'Eve', grade: 95},
];

const studentsAbove80 = students.filter((student) => student.grade > 80);

const studentsAbove80B = students.filter(({grade}) => grade > 80);

console.log('>80', studentsAbove80);

[1, 2, 3, 4].forEach((el, index, arr) => {
    console.log(el);
    console.log(index);
    console.log(arr);
});
