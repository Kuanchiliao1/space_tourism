const hamburgerMenu = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", function() {
  if (hamburgerMenu.getAttribute("data-visible") == "false") {
    hamburgerMenu.setAttribute("data-visible", "true")
    hamburgerMenu.setAttribute("aria-expanded", "true")
    
    // Instead of using the style methods, Kevin created new rulesets and used those to toggle the classes on and off. That method is probably more versatile than what I'm doing here.
    hamburgerMenu.style.transform = "none";
    navToggle.style.backgroundImage = `url("assets/shared/icon-close.svg")`
  } else {
    hamburgerMenu.setAttribute("data-visible", "false")
    hamburgerMenu.setAttribute("aria-expanded", "false")

    hamburgerMenu.style.transform = "translateX(100%)";
    navToggle.style.backgroundImage = `url("assets/shared/icon-hamburger.svg")`;
  }
});
