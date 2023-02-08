const hamburgerMenu = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", function() {
  if (hamburgerMenu.getAttribute("data-visible") == "false") {
    hamburgerMenu.setAttribute("data-visible", "true")
    hamburgerMenu.setAttribute("aria-expanded", "true")
    
    // Instead of changing style here, Kevin created new CSS rulesets and used those to toggle the classes on and off. That method seems more versatile than what I'm doing here. It would have been a ton more code here if I wanted to change many different properties
    hamburgerMenu.style.transform = "none";
    navToggle.style.backgroundImage = `url("assets/shared/icon-close.svg")`
  } else {
    hamburgerMenu.setAttribute("data-visible", "false")
    hamburgerMenu.setAttribute("aria-expanded", "false")

    hamburgerMenu.style.transform = "translateX(100%)";
    navToggle.style.backgroundImage = `url("assets/shared/icon-hamburger.svg")`;
  }
});
