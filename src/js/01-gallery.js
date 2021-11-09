// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const items = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
  </a>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', items);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
