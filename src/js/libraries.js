import defaultPoster from '../img/cinema320.jpg';
import defaultPosterMob from '../img/cinema480.jpg';
import defaultPosterTab from '../img/cinema768.jpg';
import defaultPosterDesc from '../img/cinema1280.jpg';
import { getTrendingMovies } from './fetchFilms';
import { buildTrendingsMovies } from './renderTrendingMovies';
import { renderTrendingMovies } from './renderTrendingMovies';



import axios from "axios";
const KEY = '2acc48bc8101b89794229029120e4b70';
const BASE_URL = 'https://api.themoviedb.org/3/';

// console.log(buildTrendingsMovies);
// console.log(renderTrendingMovies);
// console.log(getTrendingMovies);

console.log(KEY);

const btnLibrary = document.querySelector('.link-library');
const btnHome = document.querySelector('#home');
const divConatiner = document.querySelector('.container-library');


btnLibrary.addEventListener('click', checkcontains);
btnHome.addEventListener('click', renderNewTrendmovies);

let localstorag = [];

function renderNewTrendmovies() {
    clearContainIfLibrary();
    // divConatiner.innerHTML=`<ul class="films_list list flex"></ul>`
    
    getTrendingMovies(1);
    buildTrendingsMovies();
}

function checkcontains(e) {
    if (localstorag.length === 0) {
        clearContainIfLibrary();
        renderIfLibraryEmpty();
    }
}

// function renderIfLibraryEmpty() {
//     const rezult =
//         `<img class="images-cinema" src="${defaultPoster}" alt="cinema">
//         <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>
//         `
//         divConatiner.insertAdjacentHTML('beforeend', rezult)
// }

function renderIfLibraryEmpty() {	
    let rezult = '';	
	
    if (window.matchMedia("(min-width: 1280px)").matches) {	
        rezult =	
            `<img class="images-cinema" src="${defaultPosterDesc}" alt="cinema">	
            <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>`	
    divConatiner.insertAdjacentHTML('beforeend', rezult)	
    return;	
    }
    
    else if (window.matchMedia("(min-width: 768px)").matches) {	
        rezult =	
            `<img class="images-cinema" src="${defaultPosterTab}" alt="cinema">	
            <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>`	
    divConatiner.insertAdjacentHTML('beforeend', rezult)	
    return;	
    }

    else if (window.matchMedia("(min-width: 480px)").matches) {	
        rezult =	
            `<img class="images-cinema" src="${defaultPosterMob}" alt="cinema">	
            <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>`	
    divConatiner.insertAdjacentHTML('beforeend', rezult)	
    return;	
    }	
	
    else if (window.matchMedia("(max-width: 479px)").matches) {	
        rezult =	
            `<img class="images-cinema" src="${defaultPoster}" alt="cinema">	
            <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>`	
    divConatiner.insertAdjacentHTML('beforeend', rezult)	
    return;	
    }	
}

function clearContainIfLibrary() {
    divConatiner.innerHTML = '';
}


