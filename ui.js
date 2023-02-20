import { displayBooks } from "./index.js"

// hide sections
const listSection = document.getElementById('list');
const newBookSection = document.getElementById('book-form');
const contactSection = document.getElementById('contact-info');

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