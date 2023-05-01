import {
  checkDuplicate,
  checkEmpty,
  initialize,
  hideSections,
} from './modules/display.js';

import {
  submitButton,
  listLink,
  addNewLink,
  contactLink,
  form,
  listSection,
  newBookSection,
  contactSection,
} from './modules/variables.js';

// add book from form
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  checkEmpty();
  checkDuplicate();
  form.reset();
});

initialize();

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
