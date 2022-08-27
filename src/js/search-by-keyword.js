import { getMovieByKeyword } from './fetchFilms';
import { renderTrendingMovies } from './renderTrendingMovies';
import { renderButtonsOfPagination } from './pagination';

const searchValue = document.querySelector('.submit-search');
const galleryContainer = document.querySelector('.films_list');

searchValue.addEventListener('submit', onCustomSearch);

let currentPage = 1;

function onCustomSearch(event) {
  event.preventDefault();
  const formValue = event.target.query.value.toLowerCase().trim();
  console.log(formValue);
  preloaderAgain();
  if (!formValue) {
    galleryContainer.innerHTML = '';
    console.log('no result');
    return;
  } else {
    galleryContainer.innerHTML = '';
    console.log('bad request');
    getMovieByKeyword(formValue, currentPage)
      .then(film => {
        renderTrendingMovies(film.data.results);
        renderButtonsOfPagination(film.data, 1);
      })
      .catch(error => console.log(error));
  }
  return;
}

export { onCustomSearch };
