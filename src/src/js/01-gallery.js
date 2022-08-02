// Add imports above this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector('.gallery');

function createGallleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__card"><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a></li>`;
    }).join('');
};

listGallery.insertAdjacentHTML('beforeend', createGallleryMarkup(galleryItems));

new SimpleLightbox('.gallery__item', { captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });