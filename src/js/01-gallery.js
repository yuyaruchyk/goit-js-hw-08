
import SimpleLightbox from "simplelightbox";
import 'src/styles/main';
import "simplelightbox/dist/simple-lightbox.min.css";



import { galleryItems } from "./gallery-items.js";


const gallery = document.querySelector(".gallery");

const liArray = galleryItems.map(({ preview, original, description }) => {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>

  `;
});

const markup = liArray.join("");

gallery.insertAdjacentHTML("afterbegin", markup);


