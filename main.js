if (document.querySelector(".swiper") !== null) {
  let swiper2 = new Swiper(".swiper", {
    slidesPerView: 3,
    touchRatio: 0.5,
    longSwipes: true,
    loop: true,
    preventInteractionOnTransition: false,
    longSwipesRatio: 0.1,
    speed: 750,
    autoplay: true,
    grabCursor: true,
    allowTouchMove: false,
    direction: "vertical",
    breakpoints: {
      1024: {
        allowTouchMove: true,
      },
    },
  });
}

const image = document.querySelectorAll(".image");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");
const popupPrev = document.querySelector(".popup-prev");
const popupNext = document.querySelector(".popup-next");

if (popup !== null) {
  const popupText = popup.querySelector("p");
  const popupImageContainer = popup.querySelector(".popup__image");
  const popupImage = popupImageContainer.querySelector("img");
  const body = document.body;
  const firstImage = document.querySelector(".image:first-child");
  const lastImage = document.querySelector(".image:last-child");

  let currentImage = null; // Declare the currentImage variable outside the event listener

  image.forEach((image) => {
    image.addEventListener("click", openPopup);
  });

  function openPopup() {
    popup.style.display = "block";
    popup.style.opacity = "1";
    body.style.overflowY = "hidden";

    currentImage = this;
    currentImage.setAttribute("data-active", "true");
    loadData();

    popupPrev.addEventListener("click", prevImage);
    popupNext.addEventListener("click", nextImage);
    popupClose.addEventListener("click", closePopup);
  }

  function prevImage() {
    currentImage.removeAttribute("data-active");
    currentImage = currentImage.previousElementSibling || lastImage;
    currentImage.setAttribute("data-active", "true");
    loadData();
  }

  function nextImage() {
    currentImage.removeAttribute("data-active");
    currentImage = currentImage.nextElementSibling || firstImage;
    currentImage.setAttribute("data-active", "true");
    loadData();
  }

  function closePopup() {
    currentImage.removeAttribute("data-active");
    popup.style.display = "none";
    popup.style.opacity = "0";
    body.style.overflowY = "scroll";
  }

  function loadData() {
    let activeImage = document.querySelector("[data-active]");
    let imageDescription = activeImage.querySelector(".image__description");
    let imageSource = activeImage.querySelector(".img-src");
    let imgSrc = imageSource.src;
    popupImage.src = imgSrc;
    if (imageDescription !== null) {
      popupText.innerHTML = imageDescription.innerHTML;
    }
  }
}

const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuExpanded = document.querySelector(".header__mobile__menu-expanded");
const menuExpandedContent = document.querySelector(".menu-expanded__content");

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
const navLinks = document.querySelectorAll(".nav__li");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

function closeMenu() {
  menuExpandedContent.style.opacity = "0";
  menuExpanded.style.pointerEvents = "none";
  menuOpen.style.opacity = "1";
  menuClose.style.opacity = "0";
  menuClose.style.transform = "translateY(-50%)";
  menuOpen.style.transform = "translateY(0%)";
  menuOpen.style.pointerEvents = "all";
  menuClose.style.pointerEvents = "none";
  document.querySelector("body").style.overflowY = "scroll";
  setTimeout(function () {
    menuExpanded.style.opacity = "0";
  }, 200);
}
function openMenu() {
  menuExpanded.style.opacity = "1";
  menuExpanded.style.pointerEvents = "all";
  menuOpen.style.opacity = "0";
  menuClose.style.opacity = "1";
  menuClose.style.transform = "translateY(0)";
  menuOpen.style.transform = "translateY(50%)";
  menuOpen.style.pointerEvents = "none";
  menuClose.style.pointerEvents = "all";
  document.querySelector("body").style.overflowY = "hidden";
  setTimeout(function () {
    menuExpandedContent.style.opacity = "1";
  }, 200);
}

const biography = document.querySelector("#biography");
const education = document.querySelector("#education");
const profesional = document.querySelector("#profesional");
const memberships = document.querySelector("#memberships");
const authors = document.querySelector("#authors");
const assistent = document.querySelector("#assistent");
const other = document.querySelector("#other");
const viewport = document.querySelector(".bio__content__viewport");
const buttons = document.querySelectorAll(".bio__button");

if (document.querySelector(".bio") !== null) {
  biography.addEventListener("click", () => {
    document.querySelectorAll("article").forEach((article) => {
      article.classList.add("--hidden");
    });
    document.querySelector("#biography_view").classList.remove("--hidden");
    buttons.forEach((button) => {
      button.classList.remove("--highlighted");
    });
    biography.classList.add("--highlighted");
    buttons.forEach((button) => {
      button.parentElement.querySelector("span").style.opacity = "0";
    });
    biography.parentNode.querySelector("span").style.opacity = "1";
  });
  profesional.addEventListener("click", () => {
    document.querySelectorAll("article").forEach((article) => {
      article.classList.add("--hidden");
    });
    document.querySelector("#profesional_view").classList.remove("--hidden");
    buttons.forEach((button) => {
      button.classList.remove("--highlighted");
    });
    profesional.classList.add("--highlighted");
    buttons.forEach((button) => {
      button.parentElement.querySelector("span").style.opacity = "0";
    });
    profesional.parentNode.querySelector("span").style.opacity = "1";
  });
  education.addEventListener("click", () => {
    document.querySelectorAll("article").forEach((article) => {
      article.classList.add("--hidden");
    });
    document.querySelector("#education_view").classList.remove("--hidden");
    buttons.forEach((button) => {
      button.classList.remove("--highlighted");
    });
    education.classList.add("--highlighted");
    buttons.forEach((button) => {
      button.parentElement.querySelector("span").style.opacity = "0";
    });
    education.parentNode.querySelector("span").style.opacity = "1";
  });
  memberships.addEventListener("click", () => {
    document.querySelectorAll("article").forEach((article) => {
      article.classList.add("--hidden");
    });
    document.querySelector("#memberships_view").classList.remove("--hidden");
    buttons.forEach((button) => {
      button.classList.remove("--highlighted");
    });
    memberships.classList.add("--highlighted");
    buttons.forEach((button) => {
      button.parentElement.querySelector("span").style.opacity = "0";
    });
    memberships.parentNode.querySelector("span").style.opacity = "1";
  });
  authors.addEventListener("click", () => {
    document.querySelectorAll("article").forEach((article) => {
      article.classList.add("--hidden");
    });
    document.querySelector("#authors_view").classList.remove("--hidden");
    buttons.forEach((button) => {
      button.classList.remove("--highlighted");
    });
    authors.classList.add("--highlighted");
    buttons.forEach((button) => {
      button.parentElement.querySelector("span").style.opacity = "0";
    });
    authors.parentNode.querySelector("span").style.opacity = "1";
  });
  assistent.addEventListener("click", () => {
    document.querySelectorAll("article").forEach((article) => {
      article.classList.add("--hidden");
    });
    document.querySelector("#assistent_view").classList.remove("--hidden");
    buttons.forEach((button) => {
      button.classList.remove("--highlighted");
    });
    assistent.classList.add("--highlighted");
    buttons.forEach((button) => {
      button.parentElement.querySelector("span").style.opacity = "0";
    });
    assistent.parentNode.querySelector("span").style.opacity = "1";
  });
  other.addEventListener("click", () => {
    document.querySelectorAll("article").forEach((article) => {
      article.classList.add("--hidden");
    });
    document.querySelector("#other_view").classList.remove("--hidden");
    buttons.forEach((button) => {
      button.classList.remove("--highlighted");
    });
    other.classList.add("--highlighted");
    buttons.forEach((button) => {
      button.parentElement.querySelector("span").style.opacity = "0";
    });
    other.parentNode.querySelector("span").style.opacity = "1";
  });
}
