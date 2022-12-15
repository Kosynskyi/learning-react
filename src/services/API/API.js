import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8cfcb474139669e5b2bb861e26380b30';

//* @returns the list of the trending movies for today */
export const getTrendingMovies = async () => {
  const response = await axios(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

//* @returns the list of the movies by keyword */
export const getMovieByKeyWord = async query => {
  const response = await axios(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data.results;
};

//* @returns the details of the movie by movie id */
export const getMovieDetailsById = async movieId => {
  const response = await axios(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

//* @returns the cast information for the movie */
export const getCastInformationById = async movieId => {
  const response = await axios(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

//* @returns the movie reviews */
export const getMovieReviewById = async movieId => {
  const response = await axios(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
