import { getMovieByKeyword } from './fetchFilms';
import { renderTrendingMovies } from './renderTrendingMovies';
import { renderButtonsOfPagination } from './pagination';

const refs = {
  searchValue: document.querySelector('.submit-search'),
  galleryContainer: document.querySelector('.films_list'),
};

refs.searchValue.addEventListener('submit', onCustomSearch);

function generalSettings() {
  refs.searchValue.reset();
  refs.galleryContainer.innerHTML = '';
}

function onCustomSearch(event) {
  event.preventDefault();
  const formValue = event.target.query.value.toLowerCase().trim();
  if (!formValue) {
    generalSettings();
    console.log('no result');
    return;
  } else {
    generalSettings();
    getMovieByKeyword(formValue, 1)
      .then(film => {
        renderTrendingMovies(film.data.results);
        renderButtonsOfPagination(film.data, 1);
        console.log(film.data);
      })
      .catch(error => console.log(error));
  }
  return;
}

export { onCustomSearch };
