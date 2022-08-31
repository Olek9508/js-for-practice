import { getMovieByKeyword, getTrendingMovies } from './fetchFilms';
import { renderTrendingMovies } from './renderTrendingMovies';
import {
  renderButtonsOfPagination,
  selectPageKeyWord,
  selectPageTrend,
  removeEventListenersOnPaginationButtons,
} from './pagination';

const paginationButtons = document.querySelector('.pagination-nav');
const galleryContainer = document.querySelector('.films_list');
const requestParagraphRef = document.querySelector('.request-paragraph');
const paginationContainer = document.querySelector('.container_pagination');

let keyword = '';

function getInputValue({ target }) {
  keyword = target.value.trim()
  if (keyword !== '') {
    getMovieByKeyword(keyword)
    .then(({ data }) => {
      if (data.results.length === 0) {
        showErrorRequest ()
        galleryContainer.innerHTML = '';
        renderButtonsOfPagination(1);
        return;
      }
      removeEventListenersOnPaginationButtons();
      paginationButtons.addEventListener('click', selectPageKeyWord);
      renderTrendingMovies(data.results);
      renderButtonsOfPagination(data.total_pages, 1);
      target.value = ''
      showSuccessfulRequest(data.total_results, keyword)
    })
    .catch(error => console.log(error));
  }
  if (keyword === '') {
    getTrendingMovies(1)
    .then(film => {
      removeEventListenersOnPaginationButtons();
      paginationButtons.addEventListener('click', selectPageTrend);
      renderTrendingMovies(film.data.results);
      renderButtonsOfPagination(film.data.total_pages, 1);
      requestParagraphRef.textContent = ''
    })
    .catch(error => console.log(error));
  }
}

function showSuccessfulRequest (number, value) {
  requestParagraphRef.textContent = number === 1 ? `We found ${number} movie on request ${value}` 
                                                 : `We found ${number} movies on request ${value}`
  requestParagraphRef.style.color = "green"
}

function showErrorRequest () {
  requestParagraphRef.textContent = 'The search result is not successful. Enter the correct movie name.'
  requestParagraphRef.style.color = 'var(--third-red-text-color)'
}

function submitForm (e) {
  e.preventDefault()
}

export { keyword, getInputValue, submitForm };