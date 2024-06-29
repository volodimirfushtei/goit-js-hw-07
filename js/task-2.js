const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];
function createImageGallery(images) {
  const imageEl = document.querySelector('ul.js-gallery');
  imageEl.style.cssText = `display: flex;
  flex-wrap: wrap;`;
  imageEl.style.listStyleType = `none`;
  imageEl.style.gap = '48px 32px';
  const elUl = document.createDocumentFragment();
  images.forEach(image => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;
    img.width = 320;
    img.height = 180;
    li.appendChild(img);
    elUl.appendChild(li);
    imageEl.appendChild(li);
  });
}
createImageGallery(images);
console.log(images);
