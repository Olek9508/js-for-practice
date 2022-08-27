
// import { teamItems } from "./team-data";
// import Glide from '@glidejs/glide'

// const teamItemContainer = document.querySelector('.team__list');
// const teamMarkup = createMarkup(teamItems);
// teamItemContainer.insertAdjacentHTML("beforeend", teamMarkup);

// function createMarkup(teamItems) {
//     return teamItems.map(({preview, name, description, role, quote}) => {
//         return `
//         <li class="glide__slide">
//             <div class="team__img-thumb"><img class="team__image" src="${preview}" alt="${description}"></div>
//             <h3 class="team__subtitle">${name}</h3>
//             <p class="team__item"> ${role}</p>
//             <p class="team__item"> ${quote}</p>
//         </li>`;
//     })
//     .join("");
// }

// const glideOptions = {
//     type: 'carousel',
//     startAt: 0,
//     perView: 1,
//     autoplay: 3000,
//     keyboard: true,
//     hoverpause: true,
//     dots: '#dots',
//     draggable: true,
// }

// export const glide = new Glide('.glide', glideOptions).mount();


// var nextButton = document.querySelector('#next');
// var prevButton = document.querySelector('#prev');

// nextButton.addEventListener('click', function (event) {
//   event.preventDefault();

//   glide.go('>');
// })

// prevButton.addEventListener('click', function (event) {
//   event.preventDefault();

//   glide.go('<');
// })

// glide.mount();



