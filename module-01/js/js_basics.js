// Variables
// Step 1: Declare variables with `let` and `const`

// Declare a variable named `age` with the value 25
let age = 25;

// Declare a variable named `birthYear` with the value 1999
const birthYear = 1999;

// Declare a variable named `name` with the value "John Doe"
let name = 'John Doe';

// Declare a variable named `isStudent` with the value true
const isStudent = true;

// Step 2: Reassign values

// Reassign the value of `age` to 26
age = 26;

// Reassign the value of `name` to "Jane Doe"
name = 'Jane Doe';

// Try to reassign the value of `birthYear` to 2000
// Uncomment the line below to see what happens
// birthYear = 2000;

// Try to reassign the value of `isStudent` to false
// Uncomment the line below to see what happens
// isStudent = false;

// Step 3: Print variables

// Print the value of `age`
console.log('Age:', age);

// Print the value of `birthYear`
console.log('Birth Year:', birthYear);

// Print the value of `name`
console.log('Name:', name);

// Print the value of `isStudent`
console.log('Is Student:', isStudent);

// Step 4: Create and modify a new variable

// Declare a variable named `favoriteColor` with the value "blue"
let favoriteColor = 'blue';

// Print the value of `favoriteColor`
console.log('Favorite Color:', favoriteColor);

// Reassign the value of `favoriteColor` to "green"
favoriteColor = 'green';

// Print the new value of `favoriteColor`
console.log('New Favorite Color:', favoriteColor);

//ARITHMETIC
// You can work here or download the template!
// 1. Addition with mixed types
let num = 5;
let strNum = '3';
let additionResult = num + strNum;
console.log('Addition Result:', additionResult); // Expected: "53" because string + number = string concatenation

// 2. Subtraction with mixed types
let subtractionResult = num - strNum;
console.log('Subtraction Result:', subtractionResult); // Expected: 2 because JavaScript converts string to number in subtraction

// 3. Multiplication with a string
let multiplicationResult = strNum * 2;
console.log('Multiplication Result:', multiplicationResult); // Expected: 6

// 4. Division by a string
let divisionResult = 10 / strNum;
console.log('Division Result:', divisionResult); // Expected: 3.333...

// 5. Modulus operation
let num2 = 10;
let modulusResult = num2 % num;
console.log('Modulus Result with Numbers:', modulusResult); // Expected: 0
modulusResult = num2 % strNum;
console.log('Modulus Result with String:', modulusResult); // Expected: 1 because '3' is converted to 3
// 6. Numeric operations
let a = 8;
let b = 3;
let c = 10;

// Addition of numbers
let sum = a + b + c;
console.log('Addition of Numbers:', sum); // Expected: 21

// Subtraction of numbers
let difference = a - b - c;
console.log('Subtraction of Numbers:', difference); // Expected: -5

// Multiplication of numbers
let product = a * b * c;
console.log('Multiplication of Numbers:', product); // Expected: 240

// Division of numbers
let quotient = c / a;
console.log('Division of Numbers:', quotient); // Expected: 1.25

// Modulus of numbers
let remainder = c % a;
console.log('Modulus of Numbers:', remainder); // Expected: 2

// More complex expression involving all operations
let complexExpression = ((a + b) * c) / b - (a % b);
console.log('Complex Expression Result:', complexExpression); // Calculate and discuss the expected result
//COMPARISONS
// You can work here or download the template!
// Strict vs Simple Equality and Inequality
console.log('5 == "5": ', 5 == '5'); // Simple Equality, should be true
console.log('5 === "5": ', 5 === '5'); // Strict Equality, should be false

console.log('10 != "10": ', 10 != '10'); // Simple Inequality, should be false
console.log('10 !== "10": ', 10 !== '10'); // Strict Inequality, should be true

// Greater than, Less than, Greater than or Equal to, Less than or Equal to
console.log('5 > 3: ', 5 > 3); // True
console.log('"5" > "3": ', '5' > '3'); // True, string comparison

console.log('10 < 20: ', 10 < 20); // True
console.log('"10" < "20": ', '10' < '20'); // True, string comparison

console.log('5 >= 5: ', 5 >= 5); // True
console.log('"5" >= 5: ', '5' >= 5); // True, type coercion from string to number

console.log('10 <= 20: ', 10 <= 20); // True
console.log('"10" <= "20": ', '10' <= '20'); // True, string comparison

// Additional comparisons to illustrate different outcomes
console.log('true == "true": ', true == 'true'); // False, different types and values
console.log('false === false: ', false === false); // True, same type and value
console.log('0 == false: ', 0 == false); // True, type coercion makes them equivalent
console.log('0 === false: ', 0 === false); // False, no type coercion and different types

//CONDITIONALS
// You can work here or download the template!
// Current temperature in degrees Celsius
const temperature = 20; // You can change this value for different outcomes

// Task 1: Simple if/else
if (temperature < 15) {
    console.log("It's cold, wear a coat.");
} else {
    console.log("It's not too cold, no coat needed.");
}

// Task 2: Using if/else if/else
if (temperature < 15) {
    console.log("It's cold, wear a coat.");
} else if (temperature <= 25) {
    console.log("It's mild, wear a sweater.");
} else {
    console.log("It's warm, wear a t-shirt.");
}

// Task 3: Using switch
switch (true) {
    case temperature === 10:
        console.log("It's very cold, definitely wear a coat.");
        break;
    case temperature === 20:
        console.log('Nice and comfortable, a sweater will do.');
        break;
    case temperature === 30:
        console.log('Quite warm, a t-shirt is perfect.');
        break;
    default:
        console.log('Enter a specific temperature like 10, 20, or 30 degrees.');
}
//LOOPS
// You can work here or download the template!
// Array of animals in the zoo
const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

// Task 1: Count total animals using a for loop
let totalCount = 0;
for (let i = 0; i < animals.length; i++) {
    totalCount++;
}
console.log(`Total animals in the zoo: ${totalCount}`);

// Task 2: Count animals with names of five or more letters using a while loop
let countFiveLettersOrMore = 0;
let index = 0;
while (index < animals.length) {
    if (animals[index].length >= 5) {
        countFiveLettersOrMore++;
    }
    index++;
}
console.log(
    `Animals with names of five or more letters: ${countFiveLettersOrMore}`
);

// Task 3: Count animals until a name starts with 'm' using a do...while loop
let countUntilM = 0;
let position = 0;
do {
    if (animals[position][0].toLowerCase() === 'm') {
        break;
    }
    countUntilM++;
    position++;
} while (position < animals.length);

console.log(
    `Number of animals counted until we reached one starting with 'm': ${countUntilM}`
);

//FUNCTIONS;
// Part 1: Function Declarations

// 1. Declare a function with no parameters that outputs something to the console
function greet() {
    console.log('Hello, World!');
}

// Call the function
greet(); // Output: Hello, World!

// 2. Declare a function with one parameter that returns something
function square(number) {
    return number * number;
}

// Call the function and store the result
let resultSquare = square(5);

// Output the result to the console
console.log(resultSquare); // Output: 25

// 3. Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 0:
            dayName = 'Sunday';
            break;
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        default:
            dayName = 'Invalid day number';
    }
    return dayName;
}

// Call the function and store the result
let resultDayName = getDayName(3);

// Output the result to the console
console.log(resultDayName); // Output: Wednesday

// Part 2: Function Expressions

// 1. Function expression with no parameters
const greetExpression = function () {
    console.log('Hello again, World!');
};

// Call the function
greetExpression(); // Output: Hello again, World!

// 2. Function expression with one parameter
const squareExpression = function (number) {
    return number * number;
};

// Call the function and store the result
let resultSquareExpression = squareExpression(5);

// Output the result to the console
console.log(resultSquareExpression); // Output: 25

// 3. Function expression with one parameter and a switch statement
const getDayNameExpression = function (dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 0:
            dayName = 'Sunday';
            break;
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        default:
            dayName = 'Invalid day number';
    }
    return dayName;
};

// Call the function and store the result
let resultDayNameExpression = getDayNameExpression(3);

// Output the result to the console
console.log(resultDayNameExpression); // Output: Wednesday

/*
Discussion:
- Function declarations are hoisted to the top of their scope, meaning they can be called before they are declared in the code.
- Function expressions are not hoisted, so they cannot be called before they are defined.
*/

//VARIABLES AND SCOPE
// You can work here or download the template!

var myVar = 'Global with var';
function test() {
    // var, let and const behave very similar whtn it comes to function scope
    var myVar = 'Function scoped with var';
    console.log(myVar);
}

test();

console.log(myVar);

if (true) {
    let myLetVar = 'something';
    const myConstVar = 'something else';
    var myVar = 're-declared';
    // let myLetVar = 'something';
    // const myConstVar = 'something else';
    console.log(myLetVar);
    console.log(myConstVar);
    console.log(myVar);
}
// let and const are scoped to the blocks they are declared in
// console.log(myLetVar);
// console.log(myConstVar);
console.log(myVar);

const myArray = [1, 2, 3];
console.log(myArray);
myArray.push(4);
console.log(myArray);
