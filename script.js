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

function displayLibrary(library) {

    const container = document.querySelector('.books-section');

    for (let i = 0; i < library.length; i++) {
        let book = library[i];

        // Add empty book card to books-section
        let newBookCard = document.createElement('div');
        newBookCard.classList.add("book");
        container.appendChild(newBookCard);

        // Add content of current book to card
        let newBookTitle = document.createElement('h2');
        newBookTitle.innerHTML = book.title;
        newBookTitle.classList.add("title");
        let newBookAuthor = document.createElement('h3');
        newBookAuthor.innerHTML = book.author;
        newBookAuthor.classList.add("author");
        let newBookPages = document.createElement('h3');
        newBookPages.innerHTML = book.pages;
        newBookPages.classList.add("pages");

        let removeButtonRow = document.createElement('div');
        removeButtonRow.classList.add("rm-button-row");
        
        let newBookRead = document.createElement('h3');
        newBookRead.innerHTML = book.read;
        newBookRead.classList.add("read");
        let removeButton = document.createElement('div');
        removeButton.innerHTML = 'X';
        removeButton.classList.add("rm-button");

        newBookCard.appendChild(newBookTitle);
        newBookCard.appendChild(newBookAuthor);
        newBookCard.appendChild(newBookPages);
        newBookCard.appendChild(removeButtonRow);
        removeButtonRow.appendChild(newBookRead);
        removeButtonRow.appendChild(removeButton);
    }
}

// Add placeholder books
addBookToLibrary('7 Habits', 'Stephen Covey', '432', 'Yes');
addBookToLibrary('Steve Jobs Biography', 'Isaac Walterson', '656', 'Yes');
addBookToLibrary('Good Strategy Bad Strategy', 'Richard Rumelt', '336', 'No');

displayLibrary(myLibrary);