window.addEventListener("load", () => {
  const form = document.querySelector("#survey-form");
  const card = document.querySelector(".card");
  const cardFront = document.querySelector(".card__side--front");
  const cardBack = document.querySelector(".card__side--back");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const rating = document.querySelector("[name='rating']:checked");

    if (rating) {
      document.querySelector(".selected-rating").textContent = rating.value;
      card.classList.add("card--flipped");
      cardFront.setAttribute("aria-hidden", "true");
      cardBack.setAttribute("aria-hidden", "false");
    }
  });
});
