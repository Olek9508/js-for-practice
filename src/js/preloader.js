
preloadering()

function preloadering() {
  document.body.onload = function () {
  
  setTimeout(function () {
    const preloader = document.getElementById('page_preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done')
    }
    
  }, 500);
}
}

export { preloadering }




// const images = document.querySelectorAll('img')
// const lengthImagesCollection = images.length


// console.log(images)
// console.log(lengthImagesCollection)











// const preloader = document.getElementById('page_preloader');
// const images = document.images;
  // images_total_count = images.length,
  // images_loaded_count = 0,
  // perc_display = document.getElementById('load_perc')







// console.log(images)
// console.log(images)
  
//   getlenght(images)



// for (var i = 0; i < images_total_count; i++){
//   image_clone = new Image();
//   console.log(image_clone)
//   image_clone.onload = image_loaded;
//   image_clone.onerror = image_loaded;
//   image_clone.src = images[i].src;
// }

// console.log(images_total_count)
// console.log(images_loaded_count)

// function image_loaded() {
//   images_loaded_count++;
//   perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count) << 0) + '%';

//   if (images_loaded_count >= images_total_count)
//   {
//     setTimeout(function () {
//       var ;
//     if (!preloader.classList.contains('done')) {
//       preloader.classList.add('done')
//     }
//   }, 1000);
//   }
  
// }

