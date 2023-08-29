function clearAlert(inputBox) {
  inputBox.classList.remove("input-box--error");
  inputBox.querySelector(".alert").remove();
}

function appendAlert(input) {
  const inputBox = input.parentElement;
  const title = inputBox.querySelector("label").textContent;
  const alert = inputBox.querySelector(".alert") || document.createElement("p");

  alert.className = "alert alert--error";
  alert.setAttribute("aria-live", "polite");
  alert.textContent =
    !input.validity.valueMissing && input.name === "email"
      ? "Looks like this is not an email"
      : `${title} cannot be empty`;

  inputBox.append(alert);
  inputBox.classList.add("input-box--error");

  input.addEventListener(
    "input",
    () => {
      clearAlert(inputBox);
    },
    { once: true }
  );
}

window.addEventListener("load", () => {
  const form = document.querySelector("#signup-form");
  const inputs = form.querySelectorAll("input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let hasError = false;

    for (const input of inputs) {
      if (!input.validity.valid) {
        hasError = true;
        appendAlert(input);
      }
    }

    if (!hasError) {
      for (const input of inputs) {
        input.value = "";
      }
    }
  });
});
