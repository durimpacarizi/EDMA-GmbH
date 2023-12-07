"use strict";

let currentSlide = 0;

const sliderArray = document.querySelectorAll(".aboutUsSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let interval;

document.querySelector(".sliderContainer").style.display = "block";

function showSlide(index) {
  sliderArray.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + sliderArray.length) % sliderArray.length;
  showSlide(currentSlide);
  resetTimer();
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderArray.length;
  showSlide(currentSlide);
  resetTimer();
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

function autoSlide() {
  interval = setInterval(() => {
    nextSlide();
  }, 4000);
}

showSlide(currentSlide);
autoSlide();

function resetTimer() {
  clearInterval(interval);
  autoSlide();
}
