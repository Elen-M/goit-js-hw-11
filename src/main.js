import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImg } from './js/pixabay-api.js';
import { imgsTemplate } from './js/render-functions.js';

export const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('#image-input'),
    button: document.querySelector('#search-button'),
    gallery: document.querySelector('.gallery')
};

refs.form.addEventListener('click', e => {
    e.preventDefault();
    const query = refs.input.value.trim();

  if (query === '') {
    return;
  }
  refs.gallery.innerHTML = '<span class="loader"></span>';
  refs.form.reset();
  searchImg(query)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: '',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          backgroundColor: '#ef4040',
          messageSize: '16px',
          position: 'topRight',
          maxWidth: '432px',
        });
      } else {
        const markup = imgsTemplate(data.hits);
        refs.gallery.innerHTML = markup;
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        position: 'topRight',
      });
    });
  e.target.reset();
});