const mainNavigation = document.querySelector(".main-navigation");
const mainNavToggle = document.querySelector("#main-navigation-toggle");

mainNavToggle.addEventListener("click", () => {
  const expanded = mainNavToggle.getAttribute("aria-expanded");
  if (expanded === "false") {
    mainNavToggle.setAttribute("aria-expanded", true);
    mainNavigation.setAttribute("data-visible", true);
  } else {
    mainNavToggle.setAttribute("aria-expanded", false);
    mainNavigation.setAttribute("data-visible", false);
  }
});

const navLinks = document.querySelectorAll(".main-navigation li a");

for (const link of navLinks) {
  link.addEventListener("click", () => {
    mainNavToggle.setAttribute("aria-expanded", false);
    mainNavigation.setAttribute("data-visible", false);
  });
}

mainNavToggle.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "Tab" && event.shiftKey) {
    event.preventDefault();
    lastNavLink.focus();
  }
});

const lastNavLink = document.querySelector(".main-navigation li:last-child a");

lastNavLink.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && !event.shiftKey) {
    event.preventDefault();
    mainNavToggle.focus();
  }
});

const articles = document.querySelectorAll("article");

for (const article of articles) {
  const link = article.querySelector("a");
  article.style.cursor = "pointer";

  let down;
  let up;
  article.addEventListener("mousedown", () => {
    down = +new Date();
  });
  article.addEventListener("mouseup", (event) => {
    up = +new Date();

    if (up - down < 200 && event.target !== link) {
      link.click();
    }
  });
}
