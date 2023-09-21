const mainNavigation = document.querySelector(".main-navigation");
const mainNavigationWrapper = document.querySelector(
  ".main-navigation__list-wrapper"
);
const mainNavToggle = document.querySelector("#main-navigation-toggle");

mainNavToggle.addEventListener("click", () => {
  const expanded = mainNavToggle.getAttribute("aria-expanded");
  if (expanded === "false") {
    mainNavToggle.setAttribute("aria-expanded", true);
    mainNavigationWrapper.setAttribute("data-visible", true);
  } else {
    mainNavToggle.setAttribute("aria-expanded", false);
    mainNavigationWrapper.setAttribute("data-visible", false);
  }
});

mainNavigation.addEventListener("focusout", (event) => {
  console.log(event);
  if (!mainNavigation.contains(event.relatedTarget)) {
    mainNavToggle.setAttribute("aria-expanded", false);
    mainNavigationWrapper.setAttribute("data-visible", false);
  }
});

const navLinks = document.querySelectorAll(".main-navigation li a");

for (const link of navLinks) {
  link.addEventListener("click", () => {
    mainNavToggle.setAttribute("aria-expanded", false);
    mainNavigationWrapper.setAttribute("data-visible", false);
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
