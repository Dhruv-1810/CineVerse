// Get movie ID from URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

// Get the movie details container
const movieDetails = document.getElementById("movieDetails");

if (!movieDetails) {

    console.error("Movie details container not found.");

} else if (typeof movieData === "undefined") {

    movieDetails.innerHTML = `
        <div class="movie-not-found">
            <h1>Movie Data Not Found</h1>

            <p>
                Movie data could not be loaded.
            </p>

            <a href="index.html">
                ← Back to Home
            </a>
        </div>
    `;

} else {

    const allMovies = [
        ...(movieData.trending || []),
        ...(movieData.topRated || [])
    ];

    const movie = allMovies.find(
        item => String(item.id) === String(movieId)
    );

    if (!movie) {

        movieDetails.innerHTML = `

            <div class="movie-not-found">

                <h1>Movie Not Found</h1>

                <p>
                    Sorry, we couldn't find this movie.
                </p>

                <a href="index.html">
                    ← Back to Home
                </a>

            </div>

        `;

    }

    else {

        // Support both image and poster
        const poster =
            movie.image ||
            movie.poster ||
            "";


        // Support genre as array or string
        let genres = "N/A";

        if (Array.isArray(movie.genre)) {

            genres = movie.genre.join(", ");

        } else if (movie.genre) {

            genres = movie.genre;

        }

        movieDetails.innerHTML = `

            <div class="movie-details-layout">


                <!-- MOVIE POSTER -->
                <div class="movie-details-poster">

                    <img
                        src="${poster}"
                        alt="${movie.title}"
                    >

                </div>


                <!-- MOVIE INFORMATION -->
                <div class="movie-details-content">


                    <!-- TITLE -->
                    <h1>
                        ${movie.title}
                    </h1>


                    <!-- MOVIE META -->
                    <div class="movie-meta">

                        <span>
                            ${movie.year || "N/A"}
                        </span>

                        <span class="meta-dot">
                            •
                        </span>

                        <span>
                            ${movie.runtime || "N/A"}
                        </span>

                        <span class="meta-dot">
                            •
                        </span>

                        <span class="rating-tag">
                            PG-13
                        </span>

                        <span class="meta-dot">
                            •
                        </span>

                        <span>
                            ${genres}
                        </span>

                    </div>


                    <!-- RATING -->
                    <div class="details-rating">

                        <i class="fa-solid fa-star"></i>

                        <strong>
                            ${movie.rating || "N/A"}/10
                        </strong>

                        <span>
                            (${movie.ratingsCount || "ratings"})
                        </span>

                    </div>


                    <!-- DESCRIPTION -->
                    <div class="details-description">

                        <h2>
                            Description
                        </h2>

                        <p>
                            ${movie.description || "No description available."}
                        </p>

                    </div>


                </div>

            </div>


            <!-- BACK TO HOME -->
            <a
                href="index.html"
                class="back-home"
            >

                <i class="fa-solid fa-arrow-left"></i>

                Back to Home

            </a>

        `;

    }

}