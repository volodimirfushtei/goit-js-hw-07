'use strict';

const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');
const inputFill = () => {
  if (inputEl.value.trim() === '' || inputEl.value.trim() === ' ') {
    inputEl.value = 'Anonymous';
  } else {
    outputEl.textContent = inputEl.value.trim();
  }
  console.log('new name:', outputEl.textContent);
};
inputEl.addEventListener('input', inputFill);
