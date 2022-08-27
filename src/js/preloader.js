
const divPreloader = document.querySelector('.preloader');
window.addEventListener('load', openAndHiddenLoader);

function openAndHiddenLoader() {
    divPreloader.classList.add('visually-hidden');
  setTimeout(() => {
    divPreloader.remove();
  }, 1000);
};


export { openAndHiddenLoader };






// document.addEventListener('DOMContentLoaded', () => {
    
    
//     const prelod = document.querySelector('#preloader')
//     const perce = document.querySelector('#persents')
//     // console.log(perce);
//     // console.log(prelod);
//     const allImage = document.querySelectorAll('img');
//     let i = 0;



//     perce.innerHTML = ((i * 100) / (allImage.length)).toFixed(1);
    
//     // console.log(allImageLoad);

//     Array.from(allImage).forEach((file) => {
//         file.onload = () => {
//             i++
//             if (i === allImage.length) {
//                 prelod.classList.add('preloader--hide');
//                 perce.innerHTML = 100;
//             }

//         }
//     })
// })