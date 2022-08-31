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
import { getInputValue } from './search-by-keyword';
import { debounce } from 'lodash';
// /Прелоадер - поки так не працює закомінитв
// import { openAndHiddenLoader } from './preloader';

// const divPreloader = document.querySelector('.preloader');
// window.addEventListener('load', openAndHiddenLoader);

const libraryButtonRef = document.querySelector('#library');
const homeButtonRef = document.querySelector('#home');
const inputRef = document.querySelector('.header-search');
const input = document.querySelector('#slider');
const paginationButtons = document.querySelector('.pagination-nav');
const gallery = document.querySelector('.films_list');
const openBtn = document.querySelector('.footer__authorship');
const loodashDebounce = 200;

inputRef.addEventListener('input', debounce(getInputValue, loodashDebounce));
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
