window.addEventListener("load", () => {
  const form = document.querySelector("form");
  const email = document.querySelector("[type='email']");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!email.validity.valid) {
      form.classList.add("email-error");
      form.addEventListener(
        "input",
        () => {
          form.classList.remove("email-error");
        },
        { once: true }
      );
    } else {
      email.value = "";
    }
  });
});
