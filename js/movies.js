const movieData = {

    // TRENDING MOVIES

    trending: [

        {
            id: 1,
            title: "The Odyssey",
            year: 2026,
            rating: 8.5,
            image: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
            runtime: "2h 30m",
            genre: ["Action", "Adventure", "Drama"],
            description: "A legendary hero faces a dangerous journey home after the Trojan War, encountering powerful enemies, mythical creatures and difficult choices along the way.",
            ratingsCount: "50K+"
        },

        {
            id: 2,
            title: "Dune: Part Two",
            year: 2024,
            rating: 8.6,
            image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
            runtime: "2h 46m",
            genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
            description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
            ratingsCount: "500K+"
        },

        {
            id: 3,
            title: "Oppenheimer",
            year: 2023,
            rating: 8.7,
            image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            runtime: "3h",
            genre: ["Biography", "Drama", "History"],
            description: "The story of J. Robert Oppenheimer and his role in developing the atomic bomb during the Second World War.",
            ratingsCount: "900K+"
        },

        {
            id: 4,
            title: "Spider-Man: No Way Home",
            year: 2021,
            rating: 7.8,
            image: "https://image.tmdb.org/t/p/w500/x8AOx0zIfpNKZ1eVW4fhmUiZNqU.jpg",
            runtime: "2h 28m",
            genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
            description: "Peter Parker asks Doctor Strange to make people forget his identity, but the spell goes wrong and brings dangerous visitors from other realities.",
            ratingsCount: "900K+"
        },

        {
            id: 5,
            title: "The Batman",
            year: 2022,
            rating: 8.1,
            image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
            runtime: "2h 56m",
            genre: ["Action", "Crime", "Drama", "Mystery"],
            description: "Batman investigates a series of brutal crimes committed by the Riddler while uncovering corruption within Gotham City.",
            ratingsCount: "800K+"
        },

        {
            id: 6,
            title: "Avatar: The Way of Water",
            year: 2022,
            rating: 7.6,
            image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            runtime: "3h 12m",
            genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
            description: "Jake Sully and Neytiri raise their family on Pandora while facing a renewed human threat and discovering the underwater world of the Na'vi.",
            ratingsCount: "500K+"
        },

        {
            id: 7,
            title: "Send Help",
            year: 2026,
            rating: 7.2,
            image: "https://image.tmdb.org/t/p/w500/mjkS2iAgWj3ik1DTjvI15nHZ7yl.jpg",
            runtime: "1h 40m",
            genre: ["Horror", "Thriller"],
            description: "A dangerous survival situation forces a group of people to fight against terrifying circumstances while desperately searching for help.",
            ratingsCount: "10K+"
        },

        {
            id: 8,
            title: "Goat",
            year: 2026,
            rating: 7.5,
            image: "https://image.tmdb.org/t/p/w500/wfuqMlaExcoYiUEvKfVpUTt1v4u.jpg",
            runtime: "3h 3m",
            genre: ["Action", "Drama", "Thriller"],
            description: "A former special agent is drawn back into a dangerous mission involving his past, forcing him to confront enemies and difficult choices.",
            ratingsCount: "50K+"
        },

        {
            id: 9,
            title: "Wuthering Heights",
            year: 2026,
            rating: 7.5,
            image: "https://image.tmdb.org/t/p/w500/ywRO5dyE8RyyXJd6cvd69jLZeic.jpg",
            runtime: "2h 10m",
            genre: ["Drama", "Romance"],
            description: "A passionate and turbulent love story unfolds between Heathcliff and Catherine against the isolated landscape of the Yorkshire moors.",
            ratingsCount: "10K+"
        }

    ],

    topRated: [

        {
            id: 10,
            title: "The Shawshank Redemption",
            year: 1994,
            rating: 9.3,
            image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            runtime: "2h 22m",
            genre: ["Drama"],
            description: "A banker sentenced to life in prison forms an extraordinary friendship and quietly holds on to hope while searching for freedom.",
            ratingsCount: "3M+"
        },

        {
            id: 11,
            title: "The Godfather",
            year: 1972,
            rating: 9.2,
            image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            runtime: "2h 55m",
            genre: ["Crime", "Drama"],
            description: "The aging patriarch of a powerful crime family prepares to transfer control of his empire while his reluctant son becomes increasingly involved.",
            ratingsCount: "2M+"
        },

        {
            id: 12,
            title: "The Dark Knight",
            year: 2008,
            rating: 9.0,
            ratingsCount: "2.5M+ ratings",
            image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            runtime: "2h 32m",
            genre: ["Action", "Crime", "Drama", "Thriller"],
            description: "When the Joker creates chaos throughout Gotham City, Batman faces one of his greatest psychological and physical challenges while trying to protect the city.",
            ratingsCount: "3M+"
        },

        {
            id: 13,
            title: "Pulp Fiction",
            year: 1994,
            rating: 8.9,
            image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
            runtime: "2h 34m",
            genre: ["Crime", "Drama"],
            description: "Several interconnected stories involving criminals, unexpected encounters and violent situations unfold across Los Angeles.",
            ratingsCount: "2M+"
        },

        {
            id: 14,
            title: "Forrest Gump",
            year: 1994,
            rating: 8.8,
            image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
            runtime: "2h 22m",
            genre: ["Drama", "Romance"],
            description: "A kind-hearted man with a simple outlook on life experiences extraordinary events while remaining devoted to the people he loves.",
            ratingsCount: "2M+"
        },

        {
            id: 15,
            title: "Fight Club",
            year: 1999,
            rating: 8.8,
            image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
            runtime: "2h 19m",
            genre: ["Drama", "Thriller"],
            description: "An unhappy office worker meets a mysterious man and becomes involved in an underground fight club that grows into something much more dangerous.",
            ratingsCount: "2M+"
        },

        {
            id: 16,
            title: "3 Idiots",
            year: 2009,
            rating: 8.0,
            image: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
            runtime: "2h 50m",
            genre: ["Comedy", "Drama"],
            description: "Three engineering students form an unforgettable friendship while dealing with college pressure, expectations, competition and the meaning of success.",
            ratingsCount: "500K+"
        },

        {
            id: 17,
            title: "Dangal",
            year: 2016,
            rating: 7.9,
            image: "https://image.tmdb.org/t/p/w500/1CoKNi3XVyijPCvy0usDbSWEXAg.jpg",
            runtime: "2h 41m",
            genre: ["Biography", "Drama", "Sport"],
            description: "A former wrestler trains his daughters to become world-class wrestlers and pursue his dream of winning a gold medal for the country.",
            ratingsCount: "200K+"
        },

        {
            id: 18,
            title: "Chaal Jeevi Laiye!",
            year: 2019,
            rating: 8.0,
            image: "https://www.scrolldroll.com/wp-content/uploads/2021/08/chal-jeevi-laiye-best-gujarati-films.jpg",
            runtime: "2h 17m",
            genre: ["Comedy", "Drama"],
            description: "A father and son travel to the Himalayas and encounter experiences that change their perspective on life, relationships and happiness.",
            ratingsCount: "10K+"
        },

        {
            id: 19,
            title: "Chello Divas",
            year: 2015,
            rating: 8.0,
            image: "https://tse4.mm.bing.net/th/id/OIP.XvMb1vfgofpO3JyDM02MrQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            runtime: "2h 10m",
            genre: ["Comedy", "Romance"],
            description: "A group of college friends experience friendship, love, misunderstandings and memorable moments during their final days of college.",
            ratingsCount: "10K+"
        },

        {
            id: 20,
            title: "Spider-Man: Into the Spider-Verse",
            year: 2018,
            rating: 8.4,
            image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
            runtime: "1h 57m",
            genre: ["Animation", "Action", "Adventure", "Comedy", "Sci-Fi"],
            description: "Teenager Miles Morales becomes Spider-Man and discovers that several Spider-People from different dimensions have been brought together to stop a dangerous threat.",
            ratingsCount: "700K+"
        },

        {
            id: 21,
            title: "The Lion King",
            year: 1994,
            rating: 8.5,
            image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/the-lion-king-poster.jpeg",
            runtime: "1h 28m",
            genre: ["Animation", "Adventure", "Drama", "Family", "Musical"],
            description: "After the death of his father, a young lion prince must overcome fear and exile before returning to his kingdom and taking his rightful place as king.",
            ratingsCount: "1M+"
        },

        {
            id: 22,
            title: "Coco",
            year: 2017,
            rating: 8.4,
            image: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
            runtime: "1h 45m",
            genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Music"],
            description: "A young boy named Miguel enters the Land of the Dead and discovers the surprising truth about his family's history while following his passion for music.",
            ratingsCount: "600K+"
        },

        {
            id: 23,
            title: "How to Train Your Dragon",
            year: 2010,
            rating: 8.1,
            image: "https://tse4.mm.bing.net/th/id/OIP.sJ32j_tD9-8cR1zV3cdcAQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            runtime: "1h 38m",
            genre: ["Animation", "Action", "Adventure", "Family", "Fantasy"],
            description: "A young Viking who doesn't fit in with his tribe unexpectedly befriends a wounded dragon and discovers that dragons may not be the enemies everyone believes them to be.",
            ratingsCount: "800K+"
        },

        {
            id: 24,
            title: "IT",
            year: 2017,
            rating: 7.3,
            image: "https://th.bing.com/th/id/OIP.6m-04KRnRXSjRBNAY9aEdQHaKO?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
            runtime: "2h 15m",
            genre: ["Horror", "Drama", "Thriller"],
            description: "A group of children in a small town confront a terrifying supernatural entity that takes the form of their deepest fears, including the sinister clown Pennywise.",
            ratingsCount: "600K+"
        }

    ]
};

// CREATE MOVIE CARD

function createMovieCard(movie) {

    return `

        <div class="movie-card" data-id="${movie.id}">

            <div class="movie-poster">

                <img 
                    src="${movie.image}" 
                    alt="${movie.title}"
                >

                <span class="movie-rating">

                    <i class="fa-solid fa-star"></i>

                    ${movie.rating}

                </span>

            </div>

            <div class="movie-info">

                <div class="movie-title-row">

                    <h3>${movie.title}</h3>

                    <button 
                        class="favorite-btn" 
                        type="button"
                    >

                        <i class="fa-regular fa-heart"></i>

                    </button>

                </div>

                <span class="movie-year">
                    ${movie.year}
                </span>

                <p>
                    ${movie.description}
                </p>

            </div>

        </div>

    `;
}

// RENDER MOVIES

function renderMovies(movieList, containerId) {

    const container =
        document.getElementById(containerId);

    if (!container) {

        console.error(
            `Container #${containerId} not found.`
        );

        return;
    }

    container.innerHTML =
        movieList
            .map(movie => createMovieCard(movie))
            .join("");
}

// SHOW MOVIES ON HOME PAGE

renderMovies(movieData.trending,"trendingMovies");
renderMovies(movieData.topRated,"topRatedMovies");

// ALL MOVIES

// Combine Trending + Top Rated movies
const allMoviesList = [
    ...movieData.trending,
    ...movieData.topRated
];

// Remove duplicate movies
const uniqueMoviesList = allMoviesList.filter(
    (movie, index, self) =>
        index === self.findIndex(
            item => item.id === movie.id
        )
);

// Render All Movies
renderMovies(uniqueMoviesList, "allMovies");



// ALL MOVIES

const allMovies = [
    ...movieData.trending,
    ...movieData.topRated
];

// SEARCH ELEMENTS

const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");

const searchSection =
    document.getElementById("searchResultsSection");

const searchResults =
    document.getElementById("searchResults");

const noResults =
    document.getElementById("noSearchResults");

const searchedMovie =
    document.getElementById("searchedMovie");

const clearSearch =
    document.getElementById("clearSearch");

// SEARCH MOVIES

function searchMovies(searchTerm) {

    const query =
        searchTerm
            .trim()
            .toLowerCase();

    return allMovies.filter(movie =>
        movie.title
            .toLowerCase()
            .includes(query)
    );
}

// PERFORM SEARCH

function performSearch(searchTerm) {

    const results =
        searchMovies(searchTerm);

    // Show search section
    searchSection.style.display = "block";

    // Hide homepage sections
    const normalSections =
        document.querySelectorAll(
            "#mainContent > .genres-section, " +
            "#mainContent > .movies-section:not(#searchResultsSection)"
        );

    normalSections.forEach(section => {
        section.style.display = "none";

    });

    // MOVIES FOUND

    if (results.length > 0) {

        searchResults.innerHTML =
            results
                .map(movie => createMovieCard(movie))
                .join("");

        searchResults.style.display =
            "flex";

        noResults.style.display =
            "none";
    }

    // MOVIES NOT FOUND

    else {

        searchResults.innerHTML = "";
        searchResults.style.display =
            "none";

        noResults.style.display =
            "flex";

        searchedMovie.textContent =
            searchTerm;

    }

    // Scroll to search results
    searchSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// SEARCH FORM


if (searchForm) {

    searchForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            const searchTerm =
                searchInput.value.trim();

            if (searchTerm === "") {
                return;

            }
            performSearch(searchTerm);
        }
    );
}

// CLEAR SEARCH


function clearSearchResults() {

    // Hide search section
    searchSection.style.display =
        "none";

    // Clear search results
    searchResults.innerHTML = "";

    noResults.style.display =
        "none";

    // Show homepage sections
    const normalSections =
        document.querySelectorAll(
            "#mainContent > .genres-section, " +
            "#mainContent > .movies-section:not(#searchResultsSection)"
        );

    normalSections.forEach(section => {
        section.style.display = "";
    });

    // Clear input
    searchInput.value = "";

    // Focus search input
    searchInput.focus();
}

// CLEAR SEARCH BUTTON

if (clearSearch) {
    clearSearch.addEventListener(
        "click",
        clearSearchResults
    );
}

// FAVORITE BUTTON

document.addEventListener(
    "click",
    function (event) {

        const favoriteButton =
            event.target.closest(".favorite-btn");

        if (!favoriteButton) {
            return;
        }

        const icon =
            favoriteButton.querySelector("i");

        if (!icon) {
            return;

        }

        if (
            icon.classList.contains(
                "fa-regular"
            )
        ) {

            icon.classList.remove(
                "fa-regular"
            );
            icon.classList.add(
                "fa-solid"
            );
        }

        else {
            icon.classList.remove(
                "fa-solid"
            );
            icon.classList.add(
                "fa-regular"
            );
        }
    }
);

// Filter Movies according to Genre

const genreCards = document.querySelectorAll(".genre-card");

genreCards.forEach(card => {

    card.addEventListener("click", function () {

        // Get selected genre
        const selectedGenre = this.dataset.genre;

        // Find only movies belonging to selected genre
        const filteredMovies = allMovies.filter(movie => {

            if (!movie.genre) {
                return false;
            }

            return movie.genre.includes(selectedGenre);
        });

        // Get genre result section
        const genreSection =
            document.getElementById("genreResultsSection");

        const genreResults =
            document.getElementById("genreResults");

        const genreTitle =
            document.getElementById("genreResultTitle");


        // ========================================
        // HIDE OTHER MOVIE SECTIONS
        // ========================================

        const trendingSection =
            document.getElementById("trendingMovies")
                ?.closest(".movies-section");

        const topRatedSection =
            document.getElementById("topRatedMovies")
                ?.closest(".movies-section");

        const allMoviesSection =
            document.getElementById("all_movies")
                ?.closest(".movies-section");


        if (trendingSection) {
            trendingSection.style.display = "none";
        }

        if (topRatedSection) {
            topRatedSection.style.display = "none";
        }

        if (allMoviesSection) {
            allMoviesSection.style.display = "none";
        }


        // ========================================
        // SHOW ONLY SELECTED GENRE MOVIES
        // ========================================

        genreSection.style.display = "block";

        genreTitle.textContent =
            `${selectedGenre} Movies`;

        genreResults.innerHTML = filteredMovies
            .map(movie => createMovieCard(movie))
            .join("");


        // ========================================
        // SCROLL TO GENRE RESULTS
        // ========================================

        genreSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// Movie Details page

document.addEventListener("click", function (event) {

    const movieCard =
        event.target.closest(".movie-card");

    if (!movieCard) {
        return;
    }

    /* Get movie ID */

    const movieId =
        movieCard.dataset.id;

    /* Open details page */

    window.location.href =
        `movie-details.html?id=${movieId}`;

});