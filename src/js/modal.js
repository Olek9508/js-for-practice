const closeBtn = document.querySelector('.modal__btn')
const backdrop = document.querySelector('.backdrop')
const modalWindow = document.querySelector('.modal')
const scrollPart = document.getElementById('scroll')
let scrollDelay = null

modalWindow.addEventListener ('mousedown', pauseScroll)
modalWindow.addEventListener ('mouseup', resumeScroll)

function openModalWindow() {
    backdrop.classList.remove('is-hidden');
    closeBtn.addEventListener('click', closeModalWindow);
    backdrop.addEventListener('click', closeToBackdrop);
    pageScroll()
}

function closeModalWindow() {
    backdrop.classList.add('is-hidden');
    clearTimeout(scrollDelay)
    closeBtn.removeEventListener('click', closeModalWindow);
    backdrop.removeEventListener('click', closeToBackdrop);
}

function closeToBackdrop(e) {
    let name = e.target.className;
    if (name === 'backdrop') {
      closeModalWindow();
    }
  }

document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
closeModalWindow()
}
});

document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
closeFilmModalWindow()
}
});

function pageScroll() {
  scrollPart.scrollBy(0,1);
  scrollDelay = setTimeout(pageScroll, 10);
  
}

function pauseScroll () {
  clearTimeout(scrollDelay)
}

function resumeScroll () {
  scrollDelay = setTimeout(pageScroll, 10);
}

export { openModalWindow }
