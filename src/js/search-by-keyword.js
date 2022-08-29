import { getMovieByKeyword } from './fetchFilms';
import { renderTrendingMovies } from './renderTrendingMovies';
import { renderButtonsOfPagination } from './pagination';
import { onResponseCheck } from './oncheckresponse';
import { preloaderAgain } from './preloader';

const refs = {
  searchValue: document.querySelector('.submit-search'),
  galleryContainer: document.querySelector('.films_list'),
};

refs.searchValue.addEventListener('submit', onCustomSearch);

function generalSettings() {
  refs.searchValue.reset();
  refs.galleryContainer.innerHTML = '';
}

let formValue = null;

function onCustomSearch(event) {
  event.preventDefault();
  formValue = event.target.query.value.toLowerCase().trim();
  if (!formValue) {
    generalSettings();
    console.log('no result');
    return;
  } else {
    generalSettings();
    getMovieByKeyword(formValue)
      .then(onResponseCheck)
      .then(film => {
        renderButtonsOfPagination(film.data, 2);
      })
      .catch(error => error);
  }
  return;
}

export { onCustomSearch, renderTrendingMovies };

// .then(film => {
//       renderTrendingMovies(film.data.results);
//       renderButtonsOfPagination(film.data, currentPage);
//     })
//     .catch(error => console.log(error));
