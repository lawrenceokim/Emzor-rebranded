const prevArrow = document.querySelector(".prev-btn");
const nextArrow = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
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

// image slider previous button
prevArrow.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((circles) => {
    circles.classList.remove("active");
  });

  slideNumber = slideNumber - 1;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  dots[slideNumber].classList.add("active");
});

/*========== image auto play slider*/
let playSlider;
let autoSlider = () => {
  playSlider = setInterval(function () {
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
  }, 4000);
};
autoSlider();

/* stopping slides autoplay */
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

/* start slides autoplay again */
slider.addEventListener("mouseout", () => {
  autoSlider();
});

/**making sticky navigation */
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else document.body.classList.remove("sticky");
  },
  {
    root: null /*should observe inside the viewport*/,
    threshold: 0,
    // rootMargin: "-60px",
  }
);
obs.observe(slider);
