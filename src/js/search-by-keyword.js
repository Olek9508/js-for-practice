import { getMovieByKeyword } from './fetchFilms';
import { openHomePage } from './open-home-page';
import { renderTrendingMovies } from './renderTrendingMovies';

const searchInput = document.querySelector('.header-search');
const galleryContainer = document.querySelector('.films_list');
// const films = film.data.results;

searchInput.addEventListener('submit', onCustomSearch);

let formValue = null;
let currentPage = 1;

function onCustomSearch(event) {
  event.preventDefault();
  formValue = event.target.query.value.toLowerCase().trim();
  console.log(formValue);
  if (!formValue) {
    galleryContainer.innerHTML = '';
    console.log('no result');
    return;
  } else {
    galleryContainer.innerHTML = '';
    console.log('bad request');
    return;
  }
}

export { onCustomSearch };
