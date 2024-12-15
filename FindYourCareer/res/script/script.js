// course and contact bg change effect
const dropdownList = document.querySelectorAll(".dropdown");
dropdownList.forEach((item) => {
  let course = item.previousElementSibling;

  item.addEventListener("mouseenter", () => {
    course.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    course.classList.remove("active");
  });
});

//slides flip
document.addEventListener("DOMContentLoaded", () => {
  let newUser = document.querySelector(".new-user");

  let loginSlide = document.querySelector(".login_slide");
  let signupSlide = document.querySelector(".signup_slide");
  newUser.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      loginSlide.classList.contains("visible") &&
      loginSlide.classList.contains("visibleMove")
    ) {
      loginSlide.classList.remove("visible", "visibleMove");
      signupSlide.classList.remove("vanish", "vanishMove");
    }

    signupSlide.classList.add("visible");
    loginSlide.classList.add("vanish");
    setTimeout(() => {
      signupSlide.classList.add("visibleMove");
      loginSlide.classList.add("vanishMove");
    }, 900);
  });

  let loginSlideLink = document.getElementById("login_slide_link");
  loginSlideLink.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      signupSlide.classList.contains("visible") &&
      signupSlide.classList.contains("visibleMove")
    ) {
      signupSlide.classList.remove("visible", "visibleMove");
      loginSlide.classList.remove("vanish", "vanishMove");
    }
    signupSlide.classList.add("vanish");
    loginSlide.classList.add("visible");

    setTimeout(() => {
      loginSlide.classList.add("visibleMove");
      signupSlide.classList.add("vanishMove");
    }, 900);
  });
});
