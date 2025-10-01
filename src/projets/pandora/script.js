
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// script.js





document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle-detail");

  toggles.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const detail = btn.nextElementSibling;

      if (detail.classList.contains("max-h-0")) {
        detail.classList.remove("max-h-0");
        detail.classList.add("max-h-40"); // ajuste la hauteur max selon ton contenu
      } else {
        detail.classList.add("max-h-0");
        detail.classList.remove("max-h-40");
      }
    });
  });
});


