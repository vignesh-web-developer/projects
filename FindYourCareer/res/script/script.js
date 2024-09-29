document.querySelectorAll(".courseBtn").forEach((button) => {
  const courseList = button.nextElementSibling;
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    courseList.classList.toggle("show");
    button.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!button.contains(event.target)) {
      button.classList.remove("active");
      courseList.classList.remove("show");
    }
  });
});
