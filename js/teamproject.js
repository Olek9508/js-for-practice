// import axios from 'axios';

// const KEY = '2acc48bc8101b89794229029120e4b70';
// const BASE_URL = 'https://api.themoviedb.org/3/';

// async function getTrendingMovies() {
//   const response = await fetch(`${BASE_URL}trending/movie/week?api_key=${KEY}`);
//   const data = await response.json();
//   console.log(data.results);
// }

// getTrendingMovies();

// async function getMovieByKeyword(keyword) {
//   const response = await axios.get(
//     `${BASE_URL}search/movie?api_key=${KEY}&query=${keyword}`,
//   );
//   return response;
// }

// async function getMovieDetails(movie_id) {
//   const response = await axios.get(
//     `${BASE_URL}movie/${movie_id}?api_key=${KEY}`,
//   );
//   return response;
// }

// export { getTrendingMovies };
// export { getMovieByKeyword };
// export { getMovieDetails };

const input = document.querySelector('input');
input.addEventListener('click', toggleTheme);

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    document.getElementById('slider').checked = false;
  } else {
    setTheme('theme-light');
    document.getElementById('slider').checked = true;
  }
})();
