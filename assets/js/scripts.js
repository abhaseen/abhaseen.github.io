const accordionHeaders = document.querySelectorAll(".accordion-header");

if (accordionHeaders) {
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("active");
      header.classList.toggle("active");

      let panel = header.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const lightboxImg = document.querySelectorAll("#lightboxImg");

if (lightboxImg) {
  lightboxImg.forEach((image) => {
    image.addEventListener("click", () => {
      document.body.classList.add("no-scroll");
      lightbox.classList.add("active");

      const img = document.createElement("img");
      img.src = image.src;

      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.lastChild);
      }

      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;

    lightbox.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
}

const menuButton = document.querySelector(".menu-button");
const navHeader = document.querySelector(".navbar");
const navMenu = document.querySelector(".top-nav");

if (navMenu && menuButton) {
  menuButton.addEventListener("click", toggleActiveClass);
  navMenu.addEventListener("click", removeActiveClass);

  window.addEventListener("scroll", navOnScrollToggle);
}

function toggleActiveClass() {
  navMenu.classList.toggle("active");
  menuButton.classList.toggle("change");
}

function removeActiveClass() {
  navMenu.classList.remove("active");
  menuButton.classList.remove("change");
}

function navOnScrollToggle() {
  if (document.documentElement.scrollTop > 150) {
    navHeader.classList.add("scrolled");
  } else {
    navHeader.classList.remove("scrolled");
  }
}

const scrollUpElement = document.querySelector(".scroll-up");

if (scrollUpElement) {
  window.addEventListener("scroll", scrollUpToggle);
}

function scrollUpToggle() {
  if (document.documentElement.scrollTop > 250) {
    scrollUpElement.classList.add("active");
  } else {
    scrollUpElement.classList.remove("active");
  }
}
