// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// import Notiflix from 'notiflix';
// import axios from 'axios';

// const refs = {
//   input: document.querySelector('input'),
//   form: document.querySelector('#search-form'),
//   gallery: document.querySelector('.gallery'),
// };

// let totalPages = 0;
// async function getGallery(query, page) {
//   // let page = 1;

//   const API_KEY = '37038896-cc3b3bcf0d11f1385e2f4c3a2';
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 40,
//     page: page,
//   });

//   const response = await axios.get(`https://pixabay.com/api/?${params}`);
//   totalPages = response.data.totalHits / params.per_page;
//   console.log(response);
//   console.log(response.data.hits);

//   return response;
// }

// async function getMarkup(images) {
//   let markup = await images.then(resp =>
//     resp.data.hits
//       .map(
//         img => `<div class="photo-card">
//   <img src="${img.webformatURL}" alt="${img.tags}" width = 300px height = 200px loading="lazy" >
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//       <br>${img.likes}
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//       <br>${img.views}

//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//       <br>${img.likes}
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//       <br>${img.downloads}

//     </p>
//   </div>
// </div>`
//       )
//       .join('')
//   );
//   console.log(markup);

//   refs.gallery.insertAdjacentHTML('beforeend', markup);
// }

// // async function onSubmit(evt) {
// //   evt.preventDefault();
// //   const searchQuery = evt.currentTarget.evements.searchQuery.value;
// //   if (evt.target.value === '') {
// //     return Notiflix.Notify.failure('please enter your request');
// //   }
// //   await getMarkup(getGallery(evt.target.value, 1));
// //   if (evt.target.elements.searchQuery.value === '') {
// //     return;
// //   }

// //   page = 1;
// //   gallery.innerHTML = '';
// //   // Перевіряємо, чи введено значення в полі пошуку
// //   if (!evt.target.elements.searchQuery.value.trim()) {
// //     Notiflix.Notify.failure('Sorry, you should enter a search query');
// //   } else {
// //     // Викликаємо функцію для отримання галереї зображень
// //     addGallerySub();
// //   }
// // }

// // // // // // // getMarkup(getGallery('cat', 1));
// // // // // refs.form.addEventListener('submit', onSubmit);
// // // // // // // getGallery('cat', 1);

// // // // function onInput(evt) {
// // // //   query = evt.target.value.trim();
// // // //   return query;
// // // // }
// // // // // Функція, що виконується при надсиланні форми пошуку
// // // // function onSubmit(evt) {
// // // //   // Перевіряємо, чи введено значення в полі пошуку
// // // //   if (evt.target.elements.searchQuery.value === '') {
// // // //     return;
// // // //   }
// // // //   evt.preventDefault();
// // // //   page = 1;
// // // //   gallery.innerHTML = '';
// // // //   // Перевіряємо, чи введено значення в полі пошуку
// // // //   if (!evt.target.elements.searchQuery.value.trim()) {
// // // //     Notiflix.Notify.failure('Sorry, you should enter a search query');
// // // //   } else {
// // // //     // Викликаємо функцію для отримання галереї зображень
// // // //     addGallerySub();
// // // //   }
// // // // }

// // // // // Асинхронна функція для отримання наступної сторінки галереї зображень
// // // // async function addNextGalaryStr() {
// // // //   try {
// // // //     // Прокручуємо до нижнього краю сторінки
// // // //     scroll();
// // // //     // Отримання галереї зображень з використанням функції getGallery
// // // //     const response = await getGallery(query, page);
// // // //     const images = response.data.hits;
// // // //     // Створення нових галерей зображень
// // // //     makeNewGalleries(images);
// // // //     // Оновлення SimpleLightbox
// // // //     lightbox.refresh();
// // // //     // Виведення повідомлення, якщо досягнуто останню сторінку
// // // //     if (page > totalPages) {
// // // //       Notiflix.Notify.warning(
// // // //         'Sorry, but you have reached the end of the search results.'
// // // //       );
// // // //     }
// // // //   } catch (error) {
// // // //     // Обробка помилок, якщо сталася помилка при отриманні галереї зображень
// // // //   }
// // // // }
// // // // // Функція, що виконується при зміні значення поля вводу
// // // // function onInput(evt) {
// // // //   query = evt.target.value.trim();
// // // //   return query;
// // // // }
// // // // // Функція, що виконується при надсиланні форми пошуку
// // // // function onSubmit(evt) {
// // // //   // Перевіряємо, чи введено значення в полі пошуку
// // // //   if (evt.target.elements.searchQuery.value === '') {
// // // //     return;
// // // //   }
// // // //   evt.preventDefault();
// // // //   page = 1;
// // // //   gallery.innerHTML = '';
// // // //   // Перевіряємо, чи введено значення в полі пошуку
// // // //   if (!evt.target.elements.searchQuery.value.trim()) {
// // // //     Notiflix.Notify.failure('Sorry, you should enter a search query');
// // // //   } else {
// // // //     // Викликаємо функцію для отримання галереї зображень
// // // //     addGallerySub();
// // // //   }
// // // // }
// // // // // Асинхронна функція для отримання галереї зображень при надсиланні форми пошуку
// // // // async function addGallerySub() {
// // // //   try {
// // // //     // Отримання галереї зображень з використанням функції getGallery
// // // //     const response = await getGallery(query, page);
// // // //     // Додавання зображень до галереї
// // // //     getMarkup(response);
// // // //     // Активація спостерігача, якщо є ще сторінки для завантаження
// // // //     if (page !== totalPages) {
// // // //       interObserv.observe(carddiv);
// // // //     }
// // // //   } catch (error) {
// // // //     // Обробка помилок, якщо сталася помилка при отриманні галереї зображень
// // // //   }
// // // // }
// // // // // Функція, що виконується при перетині елементом зони видимості
// // // // function onPagination(entries, interObserv) {
// // // //   entries.map(entry => {
// // // //     if (entry.isIntersecting) {
// // // //       page += 1;
// // // //       // Викликаємо функцію для отримання наступної сторінки галереї
// // // //       addNextGalaryStr();
// // // //       // При досягненні останньої сторінки відключаємо спостерігач
// // // //       if (page === totalPages) {
// // // //         interObserv.unobserve(carddiv);
// // // //       }
// // // //     }
// // // //   });
// // // // }

// // // // // Створення екземпляра IntersectionObserver (об'єкт спостерігача,
// // // // //який слідкуватиме за появою елементів в зоні видимості)
// // // // const interObserv = new IntersectionObserver(onPagination, options);

// // // // function onClick() {
// // // //   page += 1;
// // // //   addNextGalaryStr();
// // // // }

// // // // searchForm.addEventListener('change', onInput);
// // // // searchForm.addEventListener('submit', onSubmit);
// // // // btnLoad.addEventListener('click', onClick);

import axios from 'axios';
import Notiflix from 'notiflix';

const searchForm = document.querySelector('.search-form');
const submitBtn = document.querySelector("[type='submit']");
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const footer = document.querySelector('.footer');

const PIXABAY_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '37038896-cc3b3bcf0d11f1385e2f4c3a2';

let currentPage = 1;
const POST_PER_PAGE = 40;

searchForm.addEventListener('input', event => {
  const searchValue = event.target.value;
  localStorage.setItem('search-term', searchValue.trim());
});

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  const savedSearch = localStorage.getItem('search-term');
  if (savedSearch === null || savedSearch === '') {
    Notiflix.Notify.info('Please type something in the search input.');
    return;
  }
  currentPage = 1;
  fetchImages(savedSearch, currentPage);
});

const fetchImages = async (searchValue, currentPage) => {
  let galleryMarkup = '';
  let params = new URLSearchParams({
    key: PIXABAY_API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: POST_PER_PAGE,
  });

  try {
    const response = await axios.get(
      `${PIXABAY_URL}?${params}&page=${currentPage}`
    );
    // console.log('response: ', response);
    const imagesArray = response.data.hits;
    // console.log('imagesArray: ', imagesArray);
    if (searchValue === '') {
    }
    if (imagesArray.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );

      return;
    }

    loadMoreBtn.style.display = 'block';
    footer.style.display = 'flex';

    galleryMarkup = imagesArray
      .map(image => {
        return `
        <div class="photo-card">
          <div class ="thumb">
            <img class="img" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          </div>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${image.likes}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${image.views}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${image.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${image.downloads}
            </p>
          </div>
        </div>
      `;
      })
      .join('');

    gallery.innerHTML = galleryMarkup;
  } catch (error) {
    console.error(error);
  }
};

const fetchNewImages = async (searchValue, currentPage) => {
  let galleryMarkup = '';
  let params = new URLSearchParams({
    key: PIXABAY_API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: POST_PER_PAGE,
  });

  try {
    const response = await axios.get(
      `${PIXABAY_URL}?${params}&page=${currentPage}`
    );
    // console.log('response: ', response);
    const imagesArray = response.data.hits;
    // console.log('imagesArray: ', imagesArray);
    if (imagesArray.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    galleryMarkup = imagesArray
      .map(image => {
        return `
        <div class="photo-card">
          <div class ="thumb">
            <img class="img" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          </div>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${image.likes}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${image.views}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${image.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${image.downloads}
            </p>
          </div>
        </div>
      `;
      })
      .join('');

    gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  } catch (error) {
    Notiflix.Notify, failure(error);
  }
};

loadMoreBtn.addEventListener('click', async () => {
  const searchValue = localStorage.getItem('search-term');
  currentPage++;
  let params = new URLSearchParams({
    key: PIXABAY_API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: POST_PER_PAGE,
  });
  try {
    const response = await axios.get(
      `${PIXABAY_URL}?${params}&page=${currentPage}`
    );

    const imagesArray = response.data.hits;
    const imagesPerPage = POST_PER_PAGE;

    const totalImages = response.data.totalHits;
    const maxPageNumber = totalImages / imagesPerPage;
    const maxPageNumberRoundUp = Math.ceil(maxPageNumber);

    if (currentPage === maxPageNumberRoundUp) {
      footer.style.display = 'none';
      loadMoreBtn.style.display = 'none';
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }

    fetchNewImages(searchValue, currentPage);
  } catch (error) {
    console.error(error);
  }
});
footer.style.display = 'none';
loadMoreBtn.style.display = 'none';
