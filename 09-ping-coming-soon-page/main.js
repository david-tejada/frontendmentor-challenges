const form = document.querySelector(".form");
const email = document.querySelector(".form__email");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.validity.valid) {
    email.classList.add("form__email--error");
    emailInput.addEventListener("input", () => {
      email.classList.remove("form__email--error");
    });
  } else {
    emailInput.value = "";
  }
});
