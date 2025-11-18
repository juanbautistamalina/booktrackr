document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });
});
