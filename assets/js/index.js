import { useState, getMoviesData, renderMovies } from "./modules/index.js";

const URL =
	"https://api.themoviedb.org/3/discover/movie?&api_key=88ef544735216b8d23c937d6adbce2eb&sort_by=popularity.desc&region=id&page=1";

let [movies, setMovies] = useState(
	getMoviesData(URL).then((moviesData) => {
		return moviesData;
	})
);

renderMovies(movies);
