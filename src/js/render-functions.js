
import { refs } from '../main.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function imgTemplate(img) {
  const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = img;
    return `<li class="gallery-item">
  <a class="gallery-link" href="${img.largeImageURL}">
    <img
      class="gallery-image"
      src="${img.webformatURL}"
      alt="${img.tags}"
    />
  </a>
  <div class="image-info">
        <p>Likes: <span class="likes">${img.likes}</span></p>
        <p>Views: <span class="views">${img.views}</span></p>
        <p>Comments: <span class="comments">${img.comments}</span></p>
        <p>Downloads: <span class="downloads">${img.downloads}</span></p>
      </div>
</li>`
};
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function imgsTemplate(arr) {
  const markup = arr.map(imgTemplate).join('');
  lightbox.refresh(); 
  return markup;
}
