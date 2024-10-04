class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${
            this.pages
        }, Read: ${this.isRead ? 'Yes' : 'No'}`;
    }
}

const myBook = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true);
console.log(myBook.summary());

class BookList {
    constructor(list) {
        this.list = [];
    }

    add(book) {
        this.list.push(book);
    }
}

const myBookList = new BookList();

myBookList.add(new Book('title', 'author'));
