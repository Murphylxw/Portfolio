document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Carousel
  const images = ["win.jpg", "win2.jpg", "annonce.png"];
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
