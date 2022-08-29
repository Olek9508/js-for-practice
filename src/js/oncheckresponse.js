import { renderTrendingMovies } from './renderTrendingMovies';

const searchValue = document.querySelector('.submit-search');

function onResponseCheck(response) {
  const dataRef = response.data.results;
  const createHits = response.data.total_results;
  const checkAmount = 1;
  if (createHits > checkAmount || createHits !== 0) {
    console.log('ok1');
    renderTrendingMovies(dataRef);
  } else {
    console.log('error2');
  }
}

export { onResponseCheck };
