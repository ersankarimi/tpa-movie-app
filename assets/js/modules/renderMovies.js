import { createMovieElement } from "./createMovieElement.js";

export const renderMovies = (moviesPromise) => {
	const moviesWrapperElement = document.querySelector("#movies-wrapper");
	moviesWrapperElement.innerHTML = "";

	moviesPromise.then((movie) => {
		if (!movie.results.length) {
			moviesWrapperElement.innerHTML = `
<div class="col-12 d-flex justify-content-center align-items-center">
  <h1 class="text-center">No movies found</h1>
</div>
`;

			return;
		}

		movie.results.forEach((movie) => {
			return createMovieElement(movie);
		});
	});
};
