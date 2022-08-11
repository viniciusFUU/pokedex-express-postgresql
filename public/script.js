const closeAlert = () => {
  const close = document.querySelector("#closeMessage");
  const message = document.querySelector(".message");

  close.addEventListener("click", () => {
    message.style.display = "none";
  });

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
};

const viewDropdowm = () => {
  const button = document.querySelectorAll(".dropdown-button");

  button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const content = event.path[2].children[1];

      content.classList.toggle("active");

      if (content.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }

      content.addEventListener("mouseleave", () => {
        content.classList.remove("active");

        if (!content.classList.contains("active")) {
          content.style.display = "none";
        }
      });
    });
  });
};

viewDropdowm();

closeAlert();
