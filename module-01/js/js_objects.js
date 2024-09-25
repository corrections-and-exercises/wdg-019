//OBJECT LITERALS
const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    pages: 281,
    isRead: true,
    summary: function () {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${
            this.pages
        }, Read: ${this.isRead ? 'Yes' : 'No'}`;
    },
};

console.log(book.summary());
// Output: Title: To Kill a Mockingbird, Author: Harper Lee, Pages: 281, Read: Yes

//Destructuring;
// You can work here or download the template!
// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Initial object
const person = {
    name: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001',
    },
};
// Initial function
function displayPerson({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const [fruit1, fruit2] = fruits;
console.log(fruit1); // apple
console.log(fruit2); // banana

const [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit); // apple
console.log(thirdFruit); // cherry

const {name, age} = person;
console.log(name); // John Doe
console.log(age); // 30

const {
    address: {city},
} = person;
console.log(city); // New York

// Call the function
displayPerson(person);
