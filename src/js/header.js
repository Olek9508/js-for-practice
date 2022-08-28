const HEADER = document.querySelector('.header');
const HEADERTHUMB = document.querySelector('.header-thumb');

const LIBRARY = document.querySelector('#library');
const HOME = document.querySelector('#home');

const INPCONTAINER = document.querySelector('.input-container');
const BTNCONTAINER = document.querySelector('.header-search__container');

// LIBRARY.addEventListener('click', onLibraryClick);
// HOME.addEventListener('click', onHomeClick);

function onLibraryClick() {
  INPCONTAINER.innerHTML = '';
  LIBRARY.classList.add('current');
  HOME.classList.remove('current');
  BTNCONTAINER.classList.remove('unvisible');
  HEADERTHUMB.classList.remove('hidden');
}

function onHomeClick() {
  INPCONTAINER.innerHTML = `<input class="search-input" type="text" placeholder="Movie search" />
  <svg class="search-icon" id="icon-search" viewBox="0 0 32 32">
    <path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M14.667 25.333c5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667z"></path>
    <path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M28 28.001l-5.8-5.8"></path>
  </svg>`;
  HOME.classList.add('current');
  LIBRARY.classList.remove('current');
  BTNCONTAINER.classList.add('unvisible');
  HEADERTHUMB.classList.add('hidden');
}

export { onLibraryClick, onHomeClick };
