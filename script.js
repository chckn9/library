// Library array to store book objects
let myLibrary = [];

// Constructor
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
}