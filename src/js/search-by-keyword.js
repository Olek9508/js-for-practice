import { getMovieByKeyword } from './fetchFilms';
import { openHomePage } from './open-home-page';
import { renderTrendingMovies } from './renderTrendingMovies';
import { renderButtonsOfPagination } from './pagination';

const searchValue = document.querySelector('#search-query');
const galleryContainer = document.querySelector('.films_list');
const input = document.querySelector('.search-input');
// const films = film.data.results;

searchValue.addEventListener('submit', onCustomSearch);
console.log(input.value);

// let formValue = null;
// let currentPage = 1;

function onCustomSearch(event) {
  event.preventDefault();
  const formValue = event.target.query.value.toLowerCase().trim();
  console.log(formValue);
  if (!formValue) {
    galleryContainer.innerHTML = '';
    console.log('no result');
    return;
  } else {
    galleryContainer.innerHTML = '';
    console.log('bad request');
    getMovieByKeyword(formValue, 1).then(film => {
      console.log(film.data);
      renderTrendingMovies(film.data.results);
      renderButtonsOfPagination(film.data, 1);
    });
    return;
  }
}

export { onCustomSearch };
