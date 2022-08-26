import { getMovieByKeyword } from './fetchFilms';
import { renderTrendingMovies } from './renderTrendingMovies';

const searchForm = document.querySelector('.header-search');
const galleryContainer = document.querySelector('.film_list');
searchForm.addEventListener('submit', onSearchByKeyword);

function onSearchByKeyword(event) {
  // event.preventDeafault();
  const searchValue = event.target.value.toLowerCase().trim();

  if (!searchValue) {
    galleryContainer.innerHTML = '';
    console.log('wrong request');
  } else {
    galleryContainer.innerHTML = '';
    getMovieByKeyword(searchValue)
      .then(renderTrendingMovies)
      .catch(error => error);
  }
}

// .searchQuery
