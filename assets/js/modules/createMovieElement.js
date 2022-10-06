export const createMovieElement = (movieData) => {
	const moviesWrapperElement = document.querySelector("#movies-wrapper");
	// console.log(movieData);
	const { original_title, vote_average, poster_path } = movieData;

	const cardWrapper = document.createElement("div");
	cardWrapper.classList.add(
		"card",
		"col-12",
		"col-sm-6",
		"col-lg-4",
		"col-xl-3",
		"mb-4"
	);
	cardWrapper.style.border = "none";
	cardWrapper.style.minHeight = "38rem";
	cardWrapper.style.maxHeight = "38rem";

	cardWrapper.innerHTML = `
  <img
					src="${
						poster_path
							? `https://www.themoviedb.org/t/p/w500${poster_path}`
							: "https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6"
					}"
					class="card-img-top h-75 img-fluid"
					alt="${original_title} Poster"
				/>
				<div
					class="card-body d-flex justify-content-between flex-column shadow"
				>
					<div class="row">
						<h5 class="card-title fw-bold col-9 fs-5 text-wrap overflow-hidden">
							${original_title}
						</h5>
						<h6 class="fw-semibold col-3 text-end">${parseFloat(vote_average).toFixed(
							1
						)}</h6>
					</div>
					<p class="card-text">Apr 06, 2022</p>
				</div>`;

	moviesWrapperElement.appendChild(cardWrapper);
};
