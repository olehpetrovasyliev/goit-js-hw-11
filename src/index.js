// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import Notiflix from 'notiflix';
import axios from 'axios';

const refs = {
  input: document.querySelector('input'),
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

let currentPage = 1;
let totalPages = 0;

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = refs.input.value.trim().toLowerCase();

  if (searchQuery === '') {
    return;
  }

  refs.gallery.innerHTML = '';

  fetchImages(searchQuery);
  Notiflix.Notify.success(`we found ${images.length}`);
}

async function fetchImages(query) {
  try {
    const response = await getGallery(query, currentPage);
    const images = response.data.hits;

    if (images.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    showImages(images);
    refs.loadMoreBtn.classList.remove('btn-hidden');
  } catch (error) {
    console.log('Error fetching images:', error);
    showNotification('Oops! Something went wrong. Please try again later.');
  }
}

async function getGallery(query, page) {
  const API_KEY = '37038896-cc3b3bcf0d11f1385e2f4c3a2';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  totalPages = Math.ceil(response.data.totalHits / params.get('per_page'));

  return response;
}

function showImages(images) {
  const markup = images
    .map(
      img => `<div class="photo-card">
  <img src="${img.webformatURL}" alt="${img.tags}" width="300" height="200" loading="lazy">
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <br>${img.likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      <br>${img.views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      <br>${img.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <br>${img.downloads}
    </p>
  </div>
</div>`
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
  initLightbox(); // Initialize the lightbox plugin for newly added images
}

function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('is-hidden');
}

function loadMoreImages() {
  currentPage += 1;

  const searchQuery = refs.input.value.trim();
  fetchImages(searchQuery);
}

refs.loadMoreBtn.addEventListener('click', loadMoreImages);
