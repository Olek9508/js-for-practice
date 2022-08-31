import { getMovieByKeyword } from './fetchFilms';
import { renderTrendingMovies } from './renderTrendingMovies';
import {
  renderButtonsOfPagination,
  selectPageKeyWord,
  removeEventListenersOnPaginationButtons,
} from './pagination';

const paginationButtons = document.querySelector('.pagination-nav');
const galleryContainer = document.querySelector('.films_list');
const errorText = document.querySelector('.error-paragraph');
const successText = document.querySelector('.success-paragraph');
const paginationContainer = document.querySelector('.container_pagination');

let keyword = '';

function getInputValue({ target }) {
  keyword = target.value;
  getMovieByKeyword(keyword)
    .then(({ data }) => {
      if (data.results.length === 0) {
        onShowError();
        galleryContainer.innerHTML = '';
        paginationContainer.innerHTML = '';
        successText.classList.remove('hide-success');
        return;
      }
      onShowSuccess();
      errorText.classList.add('hide-error');
      removeEventListenersOnPaginationButtons();
      paginationButtons.addEventListener('click', selectPageKeyWord);
      renderTrendingMovies(data.results);
      renderButtonsOfPagination(data.total_pages, 1);
    })
    .catch(error => console.log(error));
}

function onShowError() {
  errorText.classList.remove('hide-error');
  console.log('Search result not successful. Enter the correct movie name');
}

function onShowSuccess() {
  successText.classList.add('hide-success');
  console.log('Search result not successful. Enter the correct movie name');
}

export { keyword, getInputValue, onShowError, onShowSuccess };
