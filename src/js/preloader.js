
preloadering()

function preloadering() {
  document.body.onload = function () {
    
  setTimeout(function () {
    const preloader = document.getElementById('page_preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done')
    }
    
  },200);


}
}