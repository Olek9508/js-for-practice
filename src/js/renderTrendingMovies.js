import { getMovieGenres } from './fetchFilms'

const gallery = document.querySelector('.films_list')


async function renderTrendingMovies(filmsList) {
try {
  const genres = await getMovieGenres()
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
          const genresList = findGenresNames(genre_ids, genres.data.genres)
        return `
        <li class = "film_card" data-id="${id}">
        <div class="film_card__img">
           <img class="film_card__img--block"
           src=${imageUrl}
           alt="${name}">
        </div>
        <div class="film_card__box">
          <h3 class="film_card__title">${name}</h3>
          <p class="film_card__type">${genresList} | ${year}</p>
          <p class="film_card__rating">Rating: ${vote}</p>
        </div>
        </li>
        `
      }
      )
      .join('')

    gallery.innerHTML= markup
} catch (error) {
  console.log(error)
}
}

function findGenresNames(genre_ids, data){
  const filmGenres = [];
  const genresList = data
  .map(
    ({id, name}) =>
    {
      if (genre_ids.includes(id)) {
        filmGenres.push(name);
      }
    }  
  )

  const genreArr = filmGenres.slice(0, 2)
  if (filmGenres.length > 2 || filmGenres.length === 0) {
    genreArr.push('Others');
  }
  const genreStr = genreArr.join(', ');
  return genreStr;
} 

export { renderTrendingMovies };