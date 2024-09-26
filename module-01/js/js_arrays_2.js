// 1
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number));

let sum = 0;

numbers.forEach((number) => {
    sum += number;
});

console.log('sum', sum);

const squaredNumbers = [];

numbers.forEach((number) => {
    squaredNumbers.push(number * number);
});

console.log('squaredNumbers', squaredNumbers);

// 2

const doubledNumbers = numbers.map((number) => number * 2);
console.log('doubledNumbers', doubledNumbers);

const stringNumbers = numbers.map((number) => `Number: ${number}`);
console.log('stringNumbers', stringNumbers);

const numberObjects = numbers.map((number) => {
    return {original: number, squared: number * number};
});
console.log('numberObjects', numberObjects);

// 3

const numbersTwo = [10, 20, 30, 40, 50];

console.log(numbersTwo.find((num) => num > 25));

const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35},
    {name: 'David', age: 40},
];

console.log(people.find((person) => person.name == 'Charlie'));

// 4

const numbersThree = [5, 10, 15, 20, 25, 30];

const numbersGreaterThan15 = numbersThree.filter((number) => number > 15);
console.log('numbersGreaterThan15', numbersGreaterThan15);

const students = [
    {name: 'Alice', grade: 85},
    {name: 'Bob', grade: 92},
    {name: 'Charlie', grade: 78},
    {name: 'David', grade: 88},
    {name: 'Eve', grade: 95},
];

const studentsAbove80 = students.filter((student) => student.grade > 80);
console.log('studentsAbove80', studentsAbove80);

// 5

const numbersFour = [4, 8, 15, 16, 23, 42];

console.log(numbersFour.some((number) => number > 20));

console.log(numbersFour.every((number) => number < 50));

const studentsTwo = [
    {name: 'Alice', age: 25, passed: true},
    {name: 'Bob', age: 22, passed: false},
    {name: 'Charlie', age: 27, passed: true},
    {name: 'David', age: 20, passed: true},
];

console.log(studentsTwo.some((student) => !student.passed));

console.log(studentsTwo.every((student) => student.age > 18));
