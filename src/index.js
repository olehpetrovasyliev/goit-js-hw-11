import Notiflix from 'notiflix';
import axios from 'axios';

const refs = {
  input: document.querySelector('input'),
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

let currentPage = null;
let totalPages = 0;
let searchQuery = null;

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  currentPage = 1;
  searchQuery = refs.input.value.trim().toLowerCase();

  if (searchQuery === '') {
    return;
  }

  refs.gallery.innerHTML = '';

  pushImages();
  // console.log(totalPages);
}

async function pushImages() {
  try {
    // currentPage = 1;
    const resp = await getGallery();
    const images = resp.data.hits;
    if (images.length === 0) {
      return Notiflix.Notify.failure(
        'sorry, we have not found images for your request!'
      );
    }

    getMarkup(images);
    if (totalPages > 1) {
      // console.log(1);
      refs.loadMoreBtn.classList.remove('btn-hidden');
    }
    if (totalPages === 1) {
      Notiflix.Notify.success(
        `we found ${
          images.length * totalPages
        } images for ${searchQuery}, here are all of them`
      );
      refs.loadMoreBtn.classList.add('btn-hidden');
    } else if (currentPage === 1 && totalPages > 1) {
      Notiflix.Notify.success(
        `we found ${
          images.length * totalPages
        } images for ${searchQuery}, here are first ${images.length} images`
      );
    } else if (currentPage === totalPages) {
      Notiflix.Notify.success('you have reached the last page');
      refs.loadMoreBtn.classList.add('btn-hidden');
    } else {
      Notiflix.Notify.info('here are more 40 images');
    }
  } catch (err) {
    Notiflix.Notify.failure(err);
  }
}

async function getGallery() {
  const API_KEY = '37038896-cc3b3bcf0d11f1385e2f4c3a2';
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: currentPage,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  totalPages = Math.ceil(response.data.totalHits / params.get('per_page'));

  return response;
}

function getMarkup(images) {
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
  // initLightbox(); // Initialize the lightbox plugin for newly added images
}

function loadMoreImages() {
  currentPage += 1;

  // const searchQuery = refs.input.value.trim();
  pushImages();

  if (currentPage === totalPages) {
    return refs.loadMoreBtn.classList.add('btn-hidden');
  }
}

refs.loadMoreBtn.addEventListener('click', loadMoreImages);
