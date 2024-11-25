document.addEventListener("DOMContentLoaded", function () {
  // Image Slider Logic
  let currentSlide = 0;
  const slides = document.querySelectorAll(".image-item");
  const totalSlides = slides.length;

  // Function to show the next slide
  function showNextSlide() {
    const track = document.querySelector(".slider-track");
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    track.style.transform = `translateX(-${currentSlide * 100}%)`; // Move slider
  }

  // Set interval for automatic slide change every 3 seconds
  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});
