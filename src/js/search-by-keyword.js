import { getMovieByKeyword } from './fetchFilms';
import { openHomePage } from './open-home-page';
import { renderTrendingMovies } from './renderTrendingMovies';
import { renderButtonsOfPagination } from './pagination';
import { onHomeClick } from './header';

const searchValue = document.querySelector('#search-query');
const galleryContainer = document.querySelector('.films_list');
// const films = film.data.results;

searchValue.addEventListener('submit', onCustomSearch);

let formValue = null;
let currentPage = 1;

function onCustomSearch(event) {
  event.preventDefault();
  formValue = event.target.querySearch.value.toLowerCase().trim();
  console.log(formValue);
  if (!formValue) {
    galleryContainer.innerHTML = '';
    console.log('no result');
    return;
  } else {
    galleryContainer.innerHTML = '';
    console.log('bad request');
    getMovieByKeyword(formValue, currentPage).then(film => {
      renderTrendingMovies(film.data.results);
      renderButtonsOfPagination(film.data, 1);
      onHomeClick();
    });
    return;
  }
}

export { onCustomSearch };
