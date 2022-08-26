import { getMovieDetails } from './fetchFilms'

const filmList = document.querySelector(".films_list");
const closeBtn = document.querySelector(".modal-window__close-btn")
const backdrop = document.querySelector(".modal-backdrop")
const modalData = document.querySelector(".modal-window__container")

filmList.addEventListener("click", selectFilm);

function selectFilm(event) {
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
}

function buildFilmData(data) {
    getMovieDetails(data).then(film => {
        modalData.innerHTML = ''
        modalData.insertAdjacentHTML('beforeend', renderFilmData(film.data))
    })
    .catch('error')
}

function renderFilmData(data) {
    // console.log(data);
    const imageUrl = `https://image.tmdb.org/t/p/w500/${data["poster_path"]}`
    const name = data["original_title"];
    const vote = data["vote_average"];
    const votes = data["vote_count"];
    const popularity = data["popularity"];
    const overview = data["overview"];
    // const genres = data["genres"]

    // console.log(genres);

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
                        <li class="modal-window__genre">Western</li>
                    </ul>
                </div>
                <h3 class="modal-window__info-header">About</h3>
                <p class="modal-window__info-text">${overview}</p>
                <button class="modal-window__button-watched">add to Watched</button>
                <button class="modal-window__button-queue">add to queue</button>
            </div>
    `
}

function openFilmModalWindow(data) {
    backdrop.classList.remove('is-hidden');
    closeBtn.addEventListener('click', closeFilmModalWindow);
    backdrop.addEventListener('click', closeFilmBackdrop);
    buildFilmData(data)
}

function closeFilmModalWindow() {
    backdrop.classList.add('is-hidden');
    closeBtn.removeEventListener('click', closeFilmModalWindow);
    backdrop.removeEventListener('click', closeFilmBackdrop);
}

function closeFilmBackdrop(event) {
    let name = event.target.className;
    if (name === "modal-backdrop") {
        closeFilmModalWindow();
    }
}

