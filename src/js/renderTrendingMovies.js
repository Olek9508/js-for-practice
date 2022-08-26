import { getTrendingMovies } from './fetchFilms'

const gallery = document.querySelector('.films_list')

// function buildTrendingsMovies(){
//     getTrendingMovies(1)
//     .then(films => {
//         gallery.innerHTML = ''
//         gallery.insertAdjacentHTML('beforeend', renderTrendingMovies(films.data.results))
//     })
//     .catch('error')

//     }

function renderTrendingMovies(filmsList) {
    const markup = filmsList
    .map(
        ({
          poster_path,
          original_title,
          original_name,
          genre_ids,
          release_date,
          first_air_date,
          vote_average,
          id,
        }) => {
            const imageUrl = poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${defaultPoster}`;
  
          const date = release_date ? release_date : first_air_date;
          const year = new Date(date).getFullYear();
          const name = original_title ? original_title : original_name;
          const vote = vote_average ? vote_average.toFixed(1) : 'N/A';
  
        /*   const genreArr = genres
            ? genres.slice(0, 2).map(genre => genre.name)
            : [];
  
          if (genres.length > 2 || genres.length === 0) {
            genreArr.push('Others');
          }
  
          const genreStr = genreArr.join(', '); */
        
        return `
        <li class = "film_card" data-id="${id}">
        <div class="film_card__img">
           <img class="film_card__img--block"
           src=${imageUrl}
           alt="${name}">
           </div>
           <h3 class="film_card__title">${name}</h3>
           <p class="film_card__type">${genre_ids} | ${year}</p>
           <p class="film_card__rating">Rating: ${vote}</p>
     </li>
     `
      }
      )
      .join('')
    
    // console.log(markup)
    gallery.innerHTML= markup
  }

// buildTrendingsMovies()




// зробив собі експорт - щоб логіка працювала в файлі при нажаті кнопки HOME   - і повертало рендер
// export { buildTrendingsMovies };
export { renderTrendingMovies };