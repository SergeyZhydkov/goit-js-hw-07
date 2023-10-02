import { galleryItems } from './gallery-items.js';
// Change code below this line
//
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const itemGallery = createMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', itemGallery);
galleryList.addEventListener('click', handlerClick);

function createMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"

/>
</a>
</li>`
    )
    .join('');
}
function handlerClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  const cardImg = evt.target.closest('.gallery__image');
  console.dir(cardImg.dataset.source);

  const instance = basicLightbox.create(`
<div class="modal">
<img src="${cardImg.dataset.source}" width="800" height="600">
</div>
`);

  instance.show();
  const imageItem = document.querySelector('.basicLightbox');
  imageItem.addEventListener('click', imageClose);
  function imageClose(evt) {
    if (evt.target === evt.currentTarget) {
      return;
    }
    instance.close();
  }
}
