import { onLibraryClick } from './header';
import { renderWachedCards, renderWatchedMoviesList, renderQueueMoviesList, checkActiveClassWachedBtn } from './libraries';
import { preloadering } from './preloader';

const watchedMoviesListButton = document.querySelector('.library-first');
const queueMoviesListButton = document.querySelector('.library-second');

watchedMoviesListButton.addEventListener('click', renderWatchedMoviesList(0, 18, 1))
queueMoviesListButton.addEventListener('click', renderQueueMoviesList(0, 18, 1))

function openLibrary() {
  preloadering();
  checkActiveClassWachedBtn();
  onLibraryClick();
  renderWachedCards(0, 18, 1);
}

export { openLibrary };



