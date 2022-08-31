import axios from "axios"

const KEY = '2acc48bc8101b89794229029120e4b70'
const BASE_URL = 'https://api.themoviedb.org/3/'

async function getTrendingMovies (page) {
    const response = await axios.get(`${BASE_URL}trending/movie/week?api_key=${KEY}&page=${page}`)
    return response
}

async function getMovieByKeyword (keyword, page) {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&query=${keyword}&page=${page}`)
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

export { getTrendingMovies, getMovieByKeyword, getMovieDetails, getMovieGenres }