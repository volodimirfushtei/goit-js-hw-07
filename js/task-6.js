'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divEl = document.querySelector('#controls');
const inputEl = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('div#boxes');
buttonDestroy.addEventListener('click', destroyBoxes);
buttonCreate.addEventListener('click', () => {
  const amount = parseInt(inputEl.value);
  if (amount >= 1 && amount <= 100 && Number.isInteger(amount)) {
    createBoxes(amount);
  } else {
    return;
  }
  boxesContainer.style.marginTop = '32px';
  boxesContainer.style.display = 'flex';
  boxesContainer.style.columnGap = '44px';
  function createBoxes(amount) {
    const fragment = document.createDocumentFragment();
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.marginBottom = '10px';
      fragment.appendChild(div);
      size += 10;
    }
    inputEl.value = '';
    boxesContainer.innerHTML = '';
    boxesContainer.appendChild(fragment);
  }
});
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
