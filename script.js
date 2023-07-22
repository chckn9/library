// Library array to store book objects
let myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Add placeholder books
addBookToLibrary('7 Habits', 'Stephen Covey', '432', 'Yes');
addBookToLibrary('Steve Jobs Biography', 'Isaac Walterson', '656', 'Yes');
addBookToLibrary('Good Strategy Bad Strategy', 'Richard Rumelt', '336', 'No');