/* eslint-disable import/no-mutable-exports */
import Book from './book.js';
import { DateTime } from './luxon.js';
import {
  listSection,
  newBookSection,
  contactSection,
  bookTitle,
  author,
  error,
  displayBookList,
} from './variables.js';

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

export const hideSections = () => {
  listSection.style.display = 'none';
  newBookSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export const initialize = () => {
  hideSections();
  listSection.style.display = 'block';
  displayBooks();
};

export const checkEmpty = () => {
  if (bookTitle.value.length === 0 || author.value.length === 0) {
    error.innerText = 'Fields cannot be empty!';
  }
};

export const checkDuplicate = () => {
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
};

// Document listener for removing book
document.addEventListener('click', (e) => {
  const deleteButton = e.target.closest('.remove');
  if (deleteButton) {
    books.removeBook(deleteButton.id);
    bookListArray = books.getBook();
    displayBooks();
  }
});

const time = document.querySelector('.time');
const date = new Date();
time.textContent = `${date.toDateString()}`;

setInterval(() => {
  const date = DateTime.now().toLocaleString(
    DateTime.DATETIME_FULL_WITH_SECONDS,
  );
  time.textContent = `${date}`;
}, 1000);
