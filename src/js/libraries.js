import defaultLibraryDesc from '../images/cinemaDesc-1x.jpg';
import defaultLibraryTab from '../images/cinemaTab-1x.jpg';
import defaultLibraryMob from '../images/cinemaMob-1x.jpg';

import { errorText } from '../js/search-by-keyword';


import { preloadering } from '../js/preloader'
import { selectPageWatched, selectPageQueue, selectPageWatched, removeEventListenersOnPaginationButtons, renderButtonsOfPagination } from './pagination';

const divConatiner = document.querySelector('.container-library');

const defaultConteiner = document.querySelector('.conteiner_emptylibrary');

const paginationButtons = document.querySelector(".pagination-nav");
const btnWached = document.querySelector('.library-first');
const btnQueue = document.querySelector('.library-second');
const gallery = document.querySelector('.films_list');
const preloader = document.getElementById('page_preloader');


function renderQueueMoviesList(start, end, page) {
  
  return function renderQueueCards() {
    clearDefaultLibrary();
    removeEventListenersOnPaginationButtons()
    paginationButtons.addEventListener('click', selectPageQueue)
    let localStorageQueue = localStorage.getItem('queueFilms');
    let arraylocalStorageQueue = JSON.parse(localStorageQueue);
  
    checkActiveClassQueueBtn();
  
    if (localStorageQueue === null) {
      renderEmptyCardLibrary();
      renderButtonsOfPagination(1)
      return;
    }
  
    if (arraylocalStorageQueue.length === 0) {
      renderEmptyCardLibrary();
      renderButtonsOfPagination(1)
      return;
    } 
  
    else if (arraylocalStorageQueue.length > 0) {
      
      preloaderfunction()
          
      gallery.innerHTML = '';
      const renderedArray = []
      for (let i = start; i < end; i += 1) {
        if(arraylocalStorageQueue[i] === undefined) {
          continue
        } else {
          renderedArray.push(arraylocalStorageQueue[i])
        }
      }
  
      renderListFilms(renderedArray)
      renderButtonsOfPagination(Math.ceil(arraylocalStorageQueue.length/18), page)
    }
  }
}

function renderQueueCards(start = 0, end = 18, page) {  
  removeEventListenersOnPaginationButtons()
  paginationButtons.addEventListener('click', selectPageQueue)

  let localStorageQueue = localStorage.getItem('queueFilms');
  let arraylocalStorageQueue = JSON.parse(localStorageQueue);

  checkActiveClassQueueBtn();

  if (localStorageQueue === null) {
    renderEmptyCardLibrary();
    renderButtonsOfPagination(1)
    return;
  }

  if (arraylocalStorageQueue.length === 0) {
    renderEmptyCardLibrary();
    renderButtonsOfPagination(1)
    return;
  } 

  else if (arraylocalStorageQueue.length > 0) {
    
    preloaderfunction()
        
    gallery.innerHTML = '';
    const renderedArray = []
    for (let i = start; i < end; i += 1) {
      if(arraylocalStorageQueue[i] === undefined) {
        continue
      } else {
        renderedArray.push(arraylocalStorageQueue[i])
      }
    }

    renderListFilms(renderedArray)
    renderButtonsOfPagination(Math.ceil(arraylocalStorageQueue.length/18), page)
  }
}

function clearDefaultLibrary() {
  defaultConteiner.classList.add('conteiner_emptylibrary-hidden');
}

function renderWatchedMoviesList (start, end, page) {
  return function renderWachedCards() {
    clearDefaultLibrary();
    removeEventListenersOnPaginationButtons()
    paginationButtons.addEventListener('click', selectPageWatched)

    let localStorageWached = localStorage.getItem('watchedFilms');
    let arrayLocalWachFilm = JSON.parse(localStorageWached);
  
    checkActiveClassWachedBtn();
  
    if (localStorageWached === null) {
      renderEmptyCardLibrary();
      renderButtonsOfPagination(1)
      return;
    }
  
    if (arrayLocalWachFilm.length === 0) {
      renderEmptyCardLibrary();
      renderButtonsOfPagination(1)
      return;
    }
  
    else if (arrayLocalWachFilm.length > 0) {
  
      preloaderfunction();
      gallery.innerHTML = '';
      const renderedArray = []
      for (let i = start; i < end; i += 1) {
        if(arrayLocalWachFilm[i] === undefined) {
          break
        } else {
          renderedArray.push(arrayLocalWachFilm[i])
        }
      }
  
      renderListFilms(renderedArray)
      renderButtonsOfPagination(Math.ceil(arrayLocalWachFilm.length/18), page)     
    }
  }  
}

function renderWachedCards(start = 0, end = 18, page) {
  removeEventListenersOnPaginationButtons();
  paginationButtons.addEventListener('click', selectPageWatched);

  let localStorageWached = localStorage.getItem('watchedFilms');
  let arrayLocalWachFilm = JSON.parse(localStorageWached);

  checkActiveClassWachedBtn();

  if (localStorageWached === null) {
    renderEmptyCardLibrary();
    renderButtonsOfPagination(1)
    return;
  }

  if (arrayLocalWachFilm.length === 0) {
    renderEmptyCardLibrary();
    renderButtonsOfPagination(1)
    return;
  }

  else if (arrayLocalWachFilm.length > 0) {

    preloaderfunction();
    gallery.innerHTML = '';
    const renderedArray = []
    for (let i = start; i < end; i += 1) {
      if(arrayLocalWachFilm[i] === undefined) {
        break
      } else {
        renderedArray.push(arrayLocalWachFilm[i])
      }
    }

    renderListFilms(renderedArray)
    renderButtonsOfPagination(Math.ceil(arrayLocalWachFilm.length/18), page)    
  }
}  

function preloaderfunction() {

  if (preloader.classList.contains('done')) {
            preloader.classList.remove('done')

            setTimeout(function () {
                if (!preloader.classList.contains('done')) {
                preloader.classList.add('done')
                }
            }, 200);
  }
    
}

function renderListFilms(arays) {
  for (const aray of arays) {
    const imageUrl = aray.poster_path
      ? `https://image.tmdb.org/t/p/w500/${aray.poster_path}`
      : `${aray.defaultPoster}`;
    const year = new Date(aray.release_date).getFullYear();
    const typeList = generateTypeMovies(aray.genres);
    const cardwachfil = `
                        <li class = "film_card" data-id="${aray.id}">
                        <div class="film_card__img">
                        <img class="film_card__img--block"
                        src=${imageUrl}
                        alt="${aray.original_title}">
                        </div>
                        <div class="film_card__box">
                          <h3 class="film_card__title">${aray.original_title}</h3>
                          <p class="film_card__type">${typeList} | ${year}</p>
                          <p class="film_card__rating">Rating: ${aray.vote_average}</p>
                        </div>
                        </li>
                        `;
    gallery.insertAdjacentHTML('beforeend', cardwachfil);}
}

function generateTypeMovies(types) {
  const typeFilms = [];

  for (const type of types) {
    typeFilms.push(type.name);
  }

  const typeAray = typeFilms.slice(0, 2);

  if (typeFilms.length > 2 || typeFilms.length === 0) {
    typeAray.push('Others');
  }
  const typeFilmsStr = typeAray.join(', ');

  return typeFilmsStr;
}

function checkActiveClassQueueBtn() {

  if (!btnQueue.classList.contains('active_btn')) {
    btnQueue.classList.add('active_btn');
    btnWached.classList.remove('active_btn')
  }
}

function checkActiveClassWachedBtn() {

  if (!btnWached.classList.contains('active_btn')) {
    btnWached.classList.add('active_btn')
    btnQueue.classList.remove('active_btn')
  }
}



function renderEmptyCardLibrary() {
  preloadering();
  clearContainIfLibraryEmpty();
  renderDefaultLibrary();
}

function renderDefaultLibrary() {
  defaultConteiner.classList.remove('conteiner_emptylibrary-hidden');
}

function clearContainIfLibraryEmpty() {
  divConatiner.innerHTML = '';
}



export { renderWachedCards, clearDefaultLibrary,renderWatchedMoviesList,renderQueueMoviesList, renderQueueCards, checkActiveClassWachedBtn };
