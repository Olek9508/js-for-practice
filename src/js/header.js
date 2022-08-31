import { clearDefaultLibrary } from './libraries'

import logoHeader from '../images/logo.svg';


const headerRef = document.querySelector('.header');
const headerThumb = document.querySelector('.header-thumb');
const headerContainer = document.querySelector('.header-container');
const headerMenu = document.querySelector('.header-menu');
const headerMenues = document.querySelector('.container-navigation');

const libraryBtn = document.querySelector('#library');
const homeBtn = document.querySelector('#home');
const inputContainer = document.querySelector('.header-search');
const btnsContainer = document.querySelector('.header-search__container');
const requestParagraphRef = document.querySelector('.request-paragraph');
const linkToLogoHeader = document.querySelector('.container_render_link');

function onLibraryClick() {
  renderLogoHeaderLibraPage() ;
  inputContainer.innerHTML = '';
  requestParagraphRef.textContent = ''
  headerMenues.classList.remove('header-menu')
  headerRef.classList.add('headerforlibrary');
  headerMenues.classList.add('header-menu_library');
  libraryBtn.classList.add('current');
  homeBtn.classList.remove('current');
  btnsContainer.classList.remove('unvisible');
  headerMenu.classList.remove('header-menu');
}

function onHomeClick() {
  clearDefaultLibrary();
  renderLogoHeaderHomePage();
  requestParagraphRef.textContent = ''
  headerRef.classList.remove('headerforlibrary');
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
  headerMenu.classList.remove('header-menu_library');
  headerMenu.classList.add('header-menu');
}

function renderLogoHeaderLibraPage() {
  linkToLogoHeader.innerHTML = 
          `
          <a href="./index.html" class="header-menu__logo">
          <img class="menu-logo__logo logo__images" width="24" height="24" src="${logoHeader}" alt="logo" />
          <h1 class="menu-logo__text logo-text__animation">Filmoteka</h1>
          </a>
          `;
  
}

function renderLogoHeaderHomePage() {
  linkToLogoHeader.innerHTML = 
          `
          <img class="menu-logo__logo logo__images" width="24" height="24" src="${logoHeader}" alt="logo" />
          <h1 class="menu-logo__text logo-text__animation">Filmoteka</h1>
          `;
  
};


export { onLibraryClick, onHomeClick };
