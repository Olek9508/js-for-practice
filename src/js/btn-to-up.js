const rootElement = document.documentElement;
const upToTopBtn = document.getElementById('up-to-top');

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function showBtn() {
  if (document.body.scrollTop > 100 || rootElement.scrollTop > 100) {
    upToTopBtn.classList.add('active');
  } else {
    upToTopBtn.classList.remove('active');
  }
}

document.addEventListener('scroll', showBtn);
upToTopBtn.addEventListener('click', scrollToTop);
