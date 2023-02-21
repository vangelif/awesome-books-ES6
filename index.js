import Book from './modules/book.js';
import { DateTime } from './modules/luxon.js';

const submitButton = document.getElementById('add');
const bookTitle = document.getElementById('book-title');
const author = document.getElementById('author');
const form = document.getElementById('form');
const error = document.getElementById('error');
const displayBookList = document.getElementById('table');

const listSection = document.getElementById('list');
const newBookSection = document.getElementById('book-form');
const contactSection = document.getElementById('contact-info');

const listLink = document.getElementById('list-link');
const addNewLink = document.getElementById('add-new-link');
const contactLink = document.getElementById('contact-link');

// Instantiate book class
const books = new Book();
let bookListArray = books.getBook();

const displayBooks = () => {
  displayBookList.innerHTML = '';
  bookListArray.forEach((book) => displayBookList.insertAdjacentHTML(
    'beforeend',
    `<tr>
        <td>${book.title} by ${book.author}</td>
        <td><button class="remove" id=${book.id}>Remove</button></td>
      </tr>`,
  ));
};

const hideSections = () => {
  listSection.style.display = 'none';
  newBookSection.style.display = 'none';
  contactSection.style.display = 'none';
};

const initialize = () => {
  hideSections();
  listSection.style.display = 'block';
  displayBooks();
};

initialize();

// add book from form
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (bookTitle.value.length === 0 || author.value.length === 0) {
    error.innerText = 'Fields cannot be empty!';
  }
  const checkBooks = bookListArray.find(
    (book) => book.title === bookTitle.value,
  );
  const checkAuthor = bookListArray.find(
    (book) => book.author === author.value,
  );
  if (checkBooks && checkAuthor) {
    error.innerText = 'This book already exists!!';
  } else {
    error.innerHTML = '';
    books.addBook(author.value, bookTitle.value);
    bookListArray = books.getBook();
    hideSections();
    listSection.style.display = 'block';
    displayBooks();
  }
  form.reset();
});

// Document listener for removing book
document.addEventListener('click', (e) => {
  const deleteButton = e.target.closest('.remove');
  if (deleteButton) {
    books.removeBook(deleteButton.id);
    bookListArray = books.getBook();
    displayBooks();
  }
});

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  hideSections();
  listSection.style.display = 'block';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  hideSections();
  contactSection.style.display = 'block';
});

addNewLink.addEventListener('click', (e) => {
  e.preventDefault();
  hideSections();
  newBookSection.style.display = 'block';
});

const time = document.querySelector('.time');
const date = new Date();
time.textContent = `${date.toDateString()}`;

setInterval(() => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  time.textContent = `${date}`;
}, 1000);