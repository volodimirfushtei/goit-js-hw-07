'use strict';
const ulLiItem = document.querySelector('ul#categories');
if (ulLiItem) {
  const categories = ulLiItem.querySelectorAll('li.item');
  console.log('Number of categorys:', categories.length);
  categories.forEach(category => {
    const categoryTitle = category.querySelector('h2');
    const itemsCategory = category.querySelectorAll('li');
    console.log(`Category: ${categoryTitle.textContent.trim()}`);
    console.log(`Elements: ${itemsCategory.length}`);
  });
} else {
  console.log('No elements');
}
