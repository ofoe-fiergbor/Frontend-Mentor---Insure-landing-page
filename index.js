function navlinks_slide() {
  const nav = document.querySelector(".navlinks");
  const burgerOpen = document.querySelector(".burger_open");
  const burgerClose = document.querySelector(".burger_close");
  const navLinks = document.querySelectorAll(".navlinks li");

  burgerOpen.addEventListener("click", function () {
    nav.classList.add("navlinksActive");
    burgerOpen.classList.remove("display_block");
    burgerOpen.classList.add("display_none");
    burgerClose.classList.add("display_block");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });

  burgerClose.addEventListener("click", () => {
    burgerOpen.classList.add("display_block");
    nav.classList.remove("navlinksActive");
    burgerClose.classList.remove("display_block");
  });
}

navlinks_slide();
