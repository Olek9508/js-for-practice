import { getTrendingMovies } from './fetchFilms';
import { renderTrendingMovies } from './renderTrendingMovies';
import {
  renderButtonsOfPagination,
  removeEventListenersOnPaginationButtons,
} from './pagination';
import { selectPageTrend } from './pagination';
import { onHomeClick } from './header';
import { openModalWindow } from './modal';
import { openLibrary } from './open-library';
import { toggleTheme } from './light-theme-switcher';
import { openMovieDetails } from './open-movie-details';
import { getInputValue, submitForm } from './search-by-keyword';
import { debounce } from 'lodash';


const libraryButtonRef = document.querySelector('#library');
const homeButtonRef = document.querySelector('#home');
const inputRef = document.querySelector('.header-search');
const input = document.querySelector('#slider');
const paginationButtons = document.querySelector('.pagination-nav');
const gallery = document.querySelector('.films_list');
const openBtn = document.querySelector('.footer__authorship');
const loodashDebounce = 1000;

inputRef.addEventListener('input', debounce(getInputValue, loodashDebounce));
inputRef.addEventListener('submit', submitForm);
homeButtonRef.addEventListener('click', openHomePage);
libraryButtonRef.addEventListener('click', openLibrary);
input.addEventListener('click', toggleTheme);
gallery.addEventListener('click', openMovieDetails);
openBtn.addEventListener('click', openModalWindow);

function openHomePage() {
  getTrendingMovies(1)
    .then(film => {

      onHomeClick();
      removeEventListenersOnPaginationButtons();
      paginationButtons.addEventListener('click', selectPageTrend);
      renderTrendingMovies(film.data.results);
      renderButtonsOfPagination(film.data.total_pages, 1);
    })
    .catch(error => console.log(error));
}

export { openHomePage };
