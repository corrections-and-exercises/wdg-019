function Book(title, author, pages, isRead) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.isRead = isRead;
}

const myBook = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true);
const newBook = new Book('test', 'test', 200, false);

Book.prototype.summary = function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
        this.pages
    }, Read: ${this.isRead ? 'Yes' : 'No'}`;
};

console.log(myBook);
console.log(myBook.summary());
console.log(newBook.summary());

console.log([1, 2, 3]);
