// const openBtn = document.querySelector('.footer__authorship')
const closeBtn = document.querySelector('.modal__btn')
const backdrop = document.querySelector('.backdrop')
// const modalWindow = document.querySelector('.modal')

// openBtn.addEventListener('click', openModalWindow);

function openModalWindow() {
    backdrop.classList.remove('is-hidden');
    closeBtn.addEventListener('click', closeModalWindow);
    backdrop.addEventListener('click', closeToBackdrop);
}

function closeModalWindow() {
    backdrop.classList.add('is-hidden');
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

export { openModalWindow }
