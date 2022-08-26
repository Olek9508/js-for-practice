import { onLibraryClick } from './header';
import { checkContains } from './libraries';
// import { openWatchedMoviesList } from './'
// import { openQueueMoviesList } from './'

const watchedMoviesListButton = document.querySelector(".library-first")
const queueMoviesListButton = document.querySelector(".library-second")

// watchedMoviesListButton.addEventListener('click', openWatchedMoviesList)
// queueMoviesListButton.addEventListener('click', openQueueMoviesList)

function openLibrary () {
    onLibraryClick()
    checkContains()
    // openWatchedMoviesList()
}

export { openLibrary }