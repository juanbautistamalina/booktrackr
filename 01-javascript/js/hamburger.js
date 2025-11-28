document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const modalMobile = document.querySelector(".mobile-nav");

  hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    modalMobile.classList.toggle("active");
  });
});
