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

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeModalWindow();
        }
    };

export { openModalWindow }
