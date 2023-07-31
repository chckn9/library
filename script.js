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

function removeBook(id) {
    myLibrary.splice(id, 1);
}

function displayLibrary(library) {

    const container = document.querySelector('.books-section');

    // Clear all child elements in DOM
    container.innerHTML = '';

    for (let i = 0; i < library.length; i++) {
        let book = library[i];

        // Add empty book card to books-section
        let newBookCard = document.createElement('div');
        newBookCard.classList.add('book');
        newBookCard.setAttribute('id', i);
        container.appendChild(newBookCard);

        // Add content of current book to card
        let newBookTitle = document.createElement('h2');
        newBookTitle.innerHTML = book.title;
        newBookTitle.classList.add('title');
        let newBookAuthor = document.createElement('h3');
        newBookAuthor.innerHTML = book.author;
        newBookAuthor.classList.add('author');
        let newBookPages = document.createElement('h3');
        newBookPages.innerHTML = book.pages + ' pages';
        newBookPages.classList.add('pages');

        let removeButtonRow = document.createElement('div');
        removeButtonRow.classList.add('rm-button-row');
        
        let newBookRead = document.createElement('h3');
        newBookRead.innerHTML = book.read;
        newBookRead.classList.add('read');
        let removeButton = document.createElement('div');
        removeButton.innerHTML = 'X';
        removeButton.classList.add('rm-button');

        newBookCard.appendChild(newBookTitle);
        newBookCard.appendChild(newBookAuthor);
        newBookCard.appendChild(newBookPages);
        newBookCard.appendChild(removeButtonRow);
        removeButtonRow.appendChild(newBookRead);
        removeButtonRow.appendChild(removeButton);

        // Add event listener to remove button
        removeButton.addEventListener('click', function() {
            removeBook(document.getElementById(i).id);
            displayLibrary(myLibrary);
        })
    }
}

// Add book when form values submitted
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  let inputArr = [];
  for (const pair of formData.entries()) {
    inputArr.push(pair.pop());
  }
  addBookToLibrary(inputArr[0], inputArr[1], inputArr[2], inputArr[3],)
  displayLibrary(myLibrary);
})

// Add placeholder books
addBookToLibrary('7 Habits', 'Stephen Covey', '432', 'Read');
addBookToLibrary('Steve Jobs Biography', 'Isaac Walterson', '656', 'Read');
addBookToLibrary('Good Strategy Bad Strategy', 'Richard Rumelt', '336', 'Not Read');

displayLibrary(myLibrary);