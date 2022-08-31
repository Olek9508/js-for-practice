import { getMovieDetails } from './fetchFilms'
import { addToQueueList, addToWatchedList, checkLocaleStorageModalWindow } from './localeStorage'
import{ renderQueueCards, renderWachedCards } from './libraries'

const closeBtn = document.querySelector(".modal-window__close-btn")
const backdrop = document.querySelector(".modal-backdrop")
const modalData = document.querySelector(".modal-window__container")
let addToWatchedButtonText = "add to Watched"
let addToQueueButtonText = "add to queue"
let checkedAddToQueueBtnClass = ""
let checkedAddToWathedBtnClass = ""



function openMovieDetails(event) {
    let selectedFilm;
    if (event.target.nodeName === "UL") {
        return;
    };
    if (event.target.nodeName !== "LI" || event.target.nodeName !== "IMG") {
        selectedFilm = event.target.parentElement;
    };
    if (event.target.nodeName === "IMG") {
        selectedFilm = event.target.parentElement.parentElement;
    };
    if (event.target.nodeName === "LI") {
        selectedFilm = event.target;
    };

    openFilmModalWindow(selectedFilm.getAttribute("data-id"))

    createWathedFilmsBtnName(selectedFilm.getAttribute("data-id"))
    createQueueFilmsBtnName(selectedFilm.getAttribute("data-id"))

}

function buildFilmData(data) {
    getMovieDetails(data).then(film => {
        modalData.innerHTML = ''
        modalData.insertAdjacentHTML('beforeend', renderFilmData(film.data))
        let addToWatchedButton = document.querySelector(".modal-window__button-watched")
        let addToQueueButton = document.querySelector(".modal-window__button-queue")
        addToWatchedButton.addEventListener('click', () => addToWatchedList(film.data,addToWatchedButtonText,addToWatchedButton))
        addToQueueButton.addEventListener('click', () => addToQueueList(film.data,addToQueueButtonText,addToQueueButton))

    })
    .catch('error')
}

function renderFilmData(data) {
    const imageUrl = `https://image.tmdb.org/t/p/w500/${data["poster_path"]}`
    const name = data["original_title"];
    const vote = data["vote_average"].toFixed(1);
    const votes = data["vote_count"];
    const popularity = data["popularity"].toFixed(1);
    const overview = data["overview"];
    var genresList = data["genres"].reduce(function(acc, item) {
        return acc + item["name"] + ", ";
    }, "");
    const genres = genresList.slice(0, -2);

    return `
        <img class="modal-window__image" src="${imageUrl}" alt="">
            <div class="modal-window__wraper">
                <h2 class="modal-window__title">${name}</h2>
                <div class="modal-window__list-wraper">
                    <ul class="modal-window__parameter-list list">
                        <li class="modal-window__parameter-item">Vote / Votes</li>
                        <li class="modal-window__parameter-item">Popularity</li>
                        <li class="modal-window__parameter-item">Original Title</li>
                        <li class="modal-window__parameter-item">Genre</li>
                    </ul>
                    <ul class="modal-window__value-list list">
                        <li class="modal-window__value-item">
                            <span class="modal-window__rating">${vote}</span>/<span class="modal-window__amount">${votes}</span>
                        </li>
                        <li class="modal-window__popularity">${popularity}</li>
                        <li class="modal-window__original-title">${name}</li>
                        <li class="modal-window__genre">${genres}</li>
                    </ul>
                </div>
                <h3 class="modal-window__info-header">About</h3>
                <p class="modal-window__info-text">${overview}</p>
                <div class = "modal-window__button-wrapper">
                    <button class="modal-window__button-watched btn_wached_forlibrary ${checkedAddToWathedBtnClass}">${addToWatchedButtonText}</button>
                    <button class="modal-window__button-queue btn_queue_forlibrary ${checkedAddToQueueBtnClass}">${addToQueueButtonText}</button>
                </div>    
            </div>
    `
}

function openFilmModalWindow(data) {
    document.body.style.overflow = "hidden";
    backdrop.classList.remove('is-hidden');
    closeBtn.addEventListener('click', closeFilmModalWindow);
    backdrop.addEventListener('click', closeFilmBackdrop);
    buildFilmData(data)
}

function closeFilmModalWindow() {
    document.body.style.overflow = "";
    backdrop.classList.add('is-hidden');
    closeBtn.removeEventListener('click', closeFilmModalWindow);
    backdrop.removeEventListener('click', closeFilmBackdrop);
}

function closeFilmBackdrop(event) {
    document.body.style.overflow = "";
    let name = event.target.className;
    if (name === "modal-backdrop") {
        closeFilmModalWindow();
    }
}

document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
closeFilmModalWindow()
}
});

function createWathedFilmsBtnName(id) {
    let watchItemsArray = localStorage.getItem("watchedFilms") ? JSON.parse(localStorage.getItem("watchedFilms")) : []
    if (watchItemsArray.length > 0) {
        if (checkLocaleStorageModalWindow(watchItemsArray, id)) {
            addToWatchedButtonText = "remove from watched"
            checkedAddToWathedBtnClass = "modal-window__button-watched-checked"
        }else {
        addToWatchedButtonText = "add to watched"
        checkedAddToWathedBtnClass = ""
    }
    }
    else {
        addToWatchedButtonText = "add to watched"
        checkedAddToWathedBtnClass = ""
    }
}

function createQueueFilmsBtnName(id) {
    let queueItemsArray = localStorage.getItem("queueFilms") ? JSON.parse(localStorage.getItem("queueFilms")) : []
    if (queueItemsArray.length > 0) {
        if (checkLocaleStorageModalWindow(queueItemsArray, id)) {
            addToQueueButtonText = "remove from queue"
            checkedAddToQueueBtnClass = "modal-window__button-queue-checked"
        }else {
        addToQueueButtonText = "add to queue"
        checkedAddToQueueBtnClass = ""
    }
    }
    else {
        addToQueueButtonText = "add to queue"
        checkedAddToQueueBtnClass = ""
    }
}

export { openMovieDetails }