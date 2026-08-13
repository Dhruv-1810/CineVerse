// HERO SLIDER
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentSlide = 0;


// Show selected slide
function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");

    currentSlide = index;
}

// NEXT BUTTON


nextButton.addEventListener("click", function () {

    currentSlide++;

    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

// PREVIOUS BUTTON
prevButton.addEventListener("click", function () {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});


// DOT BUTTONS
dots.forEach((dot, index) => {

    dot.addEventListener("click", function () {
        showSlide(index);
    });

});

// Change Active State Navbar
const sections = document.querySelectorAll(
    "#home, #genres, #trending_movies, #top_rated_movies"
);

const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

        });

    },
    {
        root: null,
        threshold: 0.1,
        rootMargin: "-80px 0px -50% 0px"
    }
);

sections.forEach(section => {
    observer.observe(section);
});