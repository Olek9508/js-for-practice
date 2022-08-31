const rootElement = document.documentElement;
const upToDownBtn = document.getElementById('btn-to-down');

function scrollToDown() {
  rootElement.scrollTo(window.scrollTo(0, document.body.scrollHeight));
}

function showBtn() {
  if (document.body.scrollToDown < 100 || rootElement.scrollDown < 100) {
    upToDownBtn.classList.remove('active');
  } else {
    upToDownBtn.classList.add('active');
  }
}

document.addEventListener('scroll', showBtn);
upToDownBtn.addEventListener('click', scrollToDown);
