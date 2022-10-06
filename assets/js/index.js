import { useState, getMoviesData, renderMovies } from "./modules/index.js";

const GET_MOVIE_URL =
	"https://api.themoviedb.org/3/discover/movie?&api_key=88ef544735216b8d23c937d6adbce2eb";
const SEARCH_MOVIE_URL =
	"https://api.themoviedb.org/3/search/movie?&api_key=88ef544735216b8d23c937d6adbce2eb";

const moviesWrapperElement = document.querySelector("#movies-wrapper");
const formElement = document.querySelector("form");
const searchBarElement = document.querySelector("#search");

let [movies, setMovies] = useState(
	getMoviesData(
		`${GET_MOVIE_URL}&sort_by=popularity.desc&region=id&page=1&`
	).then((moviesData) => moviesData)
);

// Initial render
renderMovies(movies);

formElement.addEventListener("submit", (event) => {
	event.preventDefault();
});

searchBarElement.addEventListener("input", (event) => {
	moviesWrapperElement.innerHTML = "";
	const searchValue = event.target.value;

	if (!searchValue) {
		movies = setMovies(
			getMoviesData(
				`${GET_MOVIE_URL}&sort_by=popularity.desc&region=id&page=1&`
			).then((moviesData) => moviesData)
		);

		renderMovies(movies);

		return;
	}

	movies = setMovies(
		getMoviesData(`${SEARCH_MOVIE_URL}&query=${searchValue}&region=id`).then(
			(moviesData) => moviesData
		)
	);

	renderMovies(movies);
});