// const loaderPre = document.body

// loaderPre.addEventListener('onload', preloaderFunction)
// const preloader = document.getElementById('page_preloader');


// function preloaderFunction() {
//    console.log('tru')

//   setTimeout(function () {
//     const preloader = document.getElementById('page_preloader');
//     console.log(preloader);
//     if (!preloader.classList.contains('done')) {
//       preloader.classList.add('done')
//     }
    
//   }, 1000);
  
// }
preloaderAgain()

function preloaderAgain() {
  document.body.onload = function () {
  
  setTimeout(function () {
    const preloader = document.getElementById('page_preloader');
    console.log(preloader);
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done')
    }
    
  }, 800);
}
}

export{ preloaderAgain }

// document.body.onload = function () {
  
//   setTimeout(function () {
//     const preloader = document.getElementById('page_preloader');
//     console.log(preloader);
//     if (!preloader.classList.contains('done')) {
//       preloader.classList.add('done')
//     }
    
//   }, 1000);
// }









// єтот закомитил
// const divPreloader = document.querySelector('.preloader');
// window.addEventListener('load', openAndHiddenLoader);

// function openAndHiddenLoader() {
//     divPreloader.classList.add('visually-hidden');
//   setTimeout(() => {
//     divPreloader.remove();
//   }, 1000);
// };


// export { openAndHiddenLoader };

// тут бил тот счто с верху 





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