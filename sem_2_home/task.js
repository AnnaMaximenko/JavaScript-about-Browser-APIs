// Получаем элементы слайдера
const slider = document.querySelector(".container");
const prevButton = document.querySelector(".back");
const nextButton = document.querySelector(".forward");
const slides = Array.from(slider.querySelectorAll("img"));
const liEl = Array.from(document.querySelectorAll(".li"));

const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
});

liEl.forEach((li, i) =>
  li.addEventListener("click", () => {
    updateSliderNav(i);
  })
);
function updateSliderNav(i) {
  slides.forEach((slide, index) => {
    if (index === i) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

updateSlider();
