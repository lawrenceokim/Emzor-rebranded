const prevArrow = document.querySelector(".prev-btn");
const nextArrow = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const numberOfSlides = slides.length;
let slideNumber = 0;

// image slider next button
nextArrow.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((circles) => {
    circles.classList.remove("active");
  });

  slideNumber = slideNumber + 1;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  dots[slideNumber].classList.add("active");
});
