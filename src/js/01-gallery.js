import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




const paletteContainer = document.querySelector(".gallery");
console.log(paletteContainer);


const cardsMarkup = createColorPhotoMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick);


function createColorPhotoMarkup(colors) {
  return colors.map(({ preview, original, description }) => {
      return `
     <div class="gallery__item">
           <a class="gallery__link" href="${original}">
        <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
             alt="${description}"
          />
         </a>
        </div>
      `;
    })
    .join("");
};
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.gallery a',{captionDelay:'250ms', captionsData:'alt'});
lightbox.close()