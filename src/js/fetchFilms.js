import axios from "axios"

const KEY = '2acc48bc8101b89794229029120e4b70'
const BASE_URL = 'https://api.themoviedb.org/3/'

async function getTrendingMovies (page) {
    const response = await axios.get(`${BASE_URL}trending/movie/week?api_key=${KEY}&page=${page}`)
    return response
}

async function getMovieByKeyword (keyword) {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&query=${keyword}`)
    return response
}

async function getMovieDetails (movie_id) {
    const response = await axios.get(`${BASE_URL}movie/${movie_id}?api_key=${KEY}`)
    return response
}

async function getMovieGenres () {
    const response = await axios.get(`${BASE_URL}genre/movie/list?api_key=${KEY}`)
    return response
}

export { getTrendingMovies }
export { getMovieByKeyword }
export { getMovieDetails }
export { getMovieGenres }

// Example:
// import { getTrendingMovies } from './js/fetchFilms'
// import { getMovieByKeyword } from './js/fetchFilms'
// import { getMovieDetails } from './js/fetchFilms'
// export { getMovieGenres }

// getTrendingMovies().then(film => console.log(film.data))
// getMovieByKeyword("Potter").then(film => console.log(film.data))
// getMovieDetails(157336).then(film => console.log(film.data))
// getMovieGenres().then(film => console.log(film))