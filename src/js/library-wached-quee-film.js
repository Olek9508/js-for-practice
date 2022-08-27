import { checkContains } from "./libraries"


import axios from "axios"

const KEY = '2acc48bc8101b89794229029120e4b70'
const BASE_URL = 'https://api.themoviedb.org/3/'

// import { getMovieDetails } from "./fetchFilms"

// console.log(getMovieDetails);

// const btnWached = document.querySelector('.library-first')
// const btnQueue = document.querySelector('.library-second')
// const gallery = document.querySelector('.films_list')

// btnWached.addEventListener('click', renderWachedCards);
// btnQueue.addEventListener('click', renderQueue);

function renderQueue() {
    let localStorageQueue = localStorage.getItem('queueFilms')
    
    // console.log(localStorageQueue);

    if (localStorageQueue === null) {
        console.log(localStorageQueue.length);
        checkContains();
        return;
    }

    else if (localStorageQueue.length > 0) {
        gallery.innerHTML = '';
        const arrayLocalQueueFilm = JSON.parse(localStorageQueue)
        console.log(arrayLocalQueueFilm);
    

        for (const i of arrayLocalQueueFilm) {
           
            const promisQueue = getMovieDetails(i);
            promisQueue.then(
                result => {
                    const imageUrl = result.data.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${result.data.poster_path}`
                        : `${result.data.defaultPoster}`;
                    const cardwachfil = `
            <li class = "film_card" data-id="${i}">
           <div class="film_card__img">
           <img class="film_card__img--block"
           src=${imageUrl}
           alt="${result.data.original_title}">
           </div>
           <h3 class="film_card__title">${result.data.original_title}</h3>
           <p class="film_card__type">Привет</p>
           <p class="film_card__rating">Rating: ${result.data.vote_average}</p>
           </li>
           `
                    gallery.insertAdjacentHTML('beforeend', cardwachfil)
                },
                error => console.log(error)
            );
        }
    
    }
}

function renderWachedCards() {
    let localStorageWached = localStorage.getItem('watchedFilms')
    if (localStorageWached.length > 0) {
        gallery.innerHTML = '';
        const arrayLocalWachFilm = JSON.parse(localStorageWached)
        // console.log(arrayLocalWachFilm);


        for (const i of arrayLocalWachFilm) {
           
            const promis = getMovieDetails(i);
            promis.then(
                result => { 
                    const imageUrl = result.data.poster_path
            ? `https://image.tmdb.org/t/p/w500/${result.data.poster_path}`
            : `${result.data.defaultPoster}`;
                    const cardwachfil = `
            <li class = "film_card" data-id="${i}">
           <div class="film_card__img">
           <img class="film_card__img--block"
           src=${imageUrl}
           alt="${result.data.original_title}">
           </div>
           <h3 class="film_card__title">${result.data.original_title}</h3>
           <p class="film_card__type">Привет</p>
           <p class="film_card__rating">Rating: ${result.data.vote_average}</p>
           </li>
           `
                    gallery.insertAdjacentHTML('beforeend', cardwachfil)
                    // console.log(result.data.poster_path)
                    // console.log(result.data.original_title)
                    // console.log(result.data.original_name)
                    console.log(result.data.genre_ids)
                    // console.log(result.data.first_air_date)
                    // console.log(result.data.vote_average)
                    // console.log(result.data.release_date)
                

                },
               
                        error => console.log(error)
  );
                } 
            }
}
