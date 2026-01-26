const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Carrousel des images
document.addEventListener("DOMContentLoaded", () => {
  const images = ["login.png", "interne.png", "appli-crm.png","aboutus.png","macros.png"];
  let currentIndex = 0;

  const carouselImg = document.getElementById("carousel-img");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const imageCounter = document.getElementById("image-counter");

  function updateCarousel() {
    carouselImg.src = images[currentIndex];
    imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });
});
