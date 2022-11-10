// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryRef = document.querySelector('.gallery');

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cardsMarkup);



console.log(galleryItems);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}">
</a>
        `;
    }).join('');
    
}

var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250 });




console.log(SimpleLightbox);

