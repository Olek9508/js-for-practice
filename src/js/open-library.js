import { onLibraryClick } from './header';
import { renderWachedCards } from './libraries'
// import { openQueueMoviesList } from './'

const watchedMoviesListButton = document.querySelector('.library-first');
const queueMoviesListButton = document.querySelector('.library-second');

// watchedMoviesListButton.addEventListener('click', openWatchedMoviesList)
// queueMoviesListButton.addEventListener('click', openQueueMoviesList)

function openLibrary() {
  onLibraryClick();
  renderWachedCards()
}

export { openLibrary };
  
  

