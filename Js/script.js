const carousel = document.getElementById('carousel');
const slides = carousel.children;
const total = slides.length;
let index = 0;

const prevBtn = document.getElementById('prev'); 
const nextBtn = document.getElementById('next');


const movieTitles = [
  "HOMEM DE FERRO 1",
  "HOMEM DE FERRO 2",
  "HOMEM DE FERRO 3",
  "OS VINGADORES",
  "ERA DE ULTRON",
  "GUERRA INFINITA",
  "ULTIMATO"
];


const titleH1 = document.querySelector('.movie-title');

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    
    titleH1.textContent = movieTitles[index];
}

prevBtn.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % total;
    updateCarousel();
});


updateCarousel();
