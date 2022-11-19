import axios from "axios";
const BASE_URL = "https://api.json-generator.com/templates/";
const API_KEY = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
const options = new URLSearchParams({
  access_token: API_KEY,
});

// export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const FetchData = async () => {
  try {
    const jobs = await axios.get(`${BASE_URL}ZM1r0eic3XEy/data?${options}`);
    return jobs;
  } catch (error) {
    console.log(error);
  }
};

// export const FetchMovieById = async (id) => {
//   try {
//     const moviesById = await axios.get(`${BASE_URL}movie/${id}?${options}`);
//     return moviesById;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const FetchMovieCast = async (id) => {
//   try {
//     const movieCast = await axios.get(
//       `${BASE_URL}movie/${id}/credits?${options}`
//     );
//     return movieCast;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const FetchMovieReview = async (id) => {
//   try {
//     const movieReview = await axios.get(
//       `${BASE_URL}movie/${id}/reviews?${options}`
//     );
//     return movieReview;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const FetchSearchMovies = async (query, page) => {
//   try {
//     const searchMovies = await axios.get(
//       `${BASE_URL}search/movie?${options}&query=${query}&page=${page}`
//     );
//     return searchMovies;
//   } catch (error) {
//     console.log(error);
//   }
// };
