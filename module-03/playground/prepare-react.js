// desctructuring

//array
const myNumbers = [1, 2, 3, 4, 5];
const firstNum = myNumbers[0];
const secondNum = myNumbers[1];

const [firstNumB, secondNumB] = myNumbers;
console.log(secondNumB);

function createArray() {
    return ['a', 'b', 'c'];
}

const result = createArray();
const firstLetterA = result[0];
const firstLetterB = result[1];
const [firstLetter, secondLetter] = createArray();

//objects
const myPerson = {
    name: 'karl',
    age: 40,
    location: {
        city: 'berlin',
    },
};

const {
    name: firstName,
    age,
    location: {city},
} = myPerson;
const nameB = myPerson.name;
console.log('firstName', firstName);

// array methods
// map

const multipliedNumbers = myNumbers.map((num) => num * 2);
console.log('multipliedNumbers', multipliedNumbers);
const filteredNumbers = myNumbers.filter((num) => num > 3);
console.log('filteredNumbers', filteredNumbers);
console.log('myNumbers', myNumbers);

//
function CreateNavbar(content) {}
function createCard() {}

async function fetchProducts() {
    try {
        const res = await fetch('...');
        if (!res.ok) throw new Error('Request failed');
        const data = await res.json();
    } catch (error) {
        console.error(error);
    }
}
