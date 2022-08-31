const headerRef = document.querySelector('.header');
const headerThumb = document.querySelector('.header-thumb');

const libraryBtn = document.querySelector('#library');
const homeBtn = document.querySelector('#home');

const inputContainer = document.querySelector('.header-search');
const btnsContainer = document.querySelector('.header-search__container');

// LIBRARY.addEventListener('click', onLibraryClick);
// HOME.addEventListener('click', onHomeClick);

import backImage from '../images/library-desktop.jpg';
import backImageTablet from '../images/library-tablet.jpg';
import backImagePhone from '../images/library-phone.jpg';

// import mainBackImage from '../images/header-bg.jpg';

const errorText = document.querySelector('.error-paragraph');
const successText = document.querySelector('.success-paragraph');

function onLibraryClick() {
  inputContainer.innerHTML = '';
  libraryBtn.classList.add('current');
  homeBtn.classList.remove('current');
  btnsContainer.classList.remove('unvisible');
  headerThumb.classList.remove('hidden');
  errorText.classList.add('hide-error');
  successText.classList.remove('hide-success');

  if (window.matchMedia('(min-width: 1280px)').matches) {
    headerRef.style.backgroundImage = `url(${backImageTablet}`;
    return;
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    headerRef.style.backgroundImage = `url(${backImagePhone}`;
    return;
  }

  if (window.matchMedia('(min-width: 0px)').matches) {
    headerRef.style.backgroundImage = `url(${backImage}`;
    return;
  }
}

function onHomeClick() {
  headerRef.style.backgroundImage = '';
  inputContainer.innerHTML = `<input
  name="querySearch"
  class="search-input"
  type="text"
  placeholder="Movie search"
/>
<svg class="search-icon" id="icon-search" viewBox="0 0 32 32">
<path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M14.667 25.333c5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667z"></path>
<path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M28 28.001l-5.8-5.8"></path>
</svg>`;
  homeBtn.classList.add('current');
  libraryBtn.classList.remove('current');
  btnsContainer.classList.add('unvisible');
  headerThumb.classList.add('hidden');
  //headerRef.style.backgroundImage = `url(${mainBackImage}`;
}

export { onLibraryClick, onHomeClick };
