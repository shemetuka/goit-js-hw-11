import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createGalleryItemMarkup } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

let lightbox;

function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();

  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.show({
      message: 'Input field cannot be empty',
      position: 'topRight',
      timeout: 2000,
      color: 'red',
    });
    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhotosByQuery(searchQuery)
    .then(imagesData => {
      console.log('Received data:', imagesData);

      if (!imagesData.hits || imagesData.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 2000,
          color: 'red',
        });

        galleryEl.innerHTML = '';
        return;
      }

      galleryEl.innerHTML = createGalleryItemMarkup(imagesData.hits);

      if (lightbox) {
        lightbox.destroy();
      }
      lightbox = new SimpleLightbox('.js-gallery a', {
        captionDelay: 250,
      });
    })
    .catch(error => {
      console.error('Error fetching photos:', error);
      iziToast.show({
        message: 'An error occurred while fetching photos',
        position: 'topRight',
        timeout: 2000,
        color: 'red',
      });
    })
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
