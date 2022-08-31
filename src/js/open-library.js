import { onLibraryClick } from './header';
import { renderWachedCards, renderWatchedMoviesList, renderQueueMoviesList, checkActiveClassWachedBtn } from './libraries';


const watchedMoviesListButton = document.querySelector('.library-first');
const queueMoviesListButton = document.querySelector('.library-second');

watchedMoviesListButton.addEventListener('click', renderWatchedMoviesList(0, 18, 1))
queueMoviesListButton.addEventListener('click', renderQueueMoviesList(0, 18, 1))

function openLibrary() {

  checkActiveClassWachedBtn();
  onLibraryClick();
  renderWachedCards();
}

export { openLibrary };



