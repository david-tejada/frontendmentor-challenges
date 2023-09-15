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
