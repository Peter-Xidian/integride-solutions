window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let headerLinks = document.querySelectorAll(".nav-links");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header-bar").classList.add("header-onscroll");
    headerLinks.forEach((element) => {
      element.classList.add("nav-links__color");
    });

    document.querySelector(".nav__toggle").style.color = "#0a0a0a";
  } else {
    document.querySelector(".header-bar").classList.remove("header-onscroll");
    headerLinks.forEach((element) => {
      element.classList.remove("nav-links__color");
    });
    document.querySelector(".nav__toggle").style.color = "#ffffff";
  }
}

// DISPLAY NAV MENU

function showNavMenu() {
  document.querySelector(".nav-menu").classList.toggle("nav-menu-display");
}
