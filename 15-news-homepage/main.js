const mainNavigation = document.querySelector(".main-navigation");
const mainNavigationWrapper = document.querySelector(
  ".main-navigation__list-wrapper"
);
const mainNavToggle = document.querySelector("#main-navigation-toggle");

function collapseNavigation() {
  mainNavToggle.setAttribute("aria-expanded", false);
  mainNavigationWrapper.setAttribute("data-visible", false);
}

function expandNavigation() {
  mainNavToggle.setAttribute("aria-expanded", true);
  mainNavigationWrapper.setAttribute("data-visible", true);
}

mainNavToggle.addEventListener("click", () => {
  const expanded = mainNavToggle.getAttribute("aria-expanded");
  if (expanded === "false") {
    expandNavigation();
  } else {
    collapseNavigation();
  }
});

mainNavigation.addEventListener("focusout", (event) => {
  if (!mainNavigation.contains(event.relatedTarget)) {
    collapseNavigation();
  }
});

mainNavigation.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    collapseNavigation();
    mainNavToggle.focus();
  }
});

const navLinks = document.querySelectorAll(".main-navigation li a");

for (const link of navLinks) {
  link.addEventListener("click", () => {
    collapseNavigation();
  });
}

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
