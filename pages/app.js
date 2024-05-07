document.addEventListener("DOMContentLoaded", function () {
  /*Welcome Message*/
  document
    .querySelector(".close-button")
    .addEventListener("click", function () {
      document.getElementById("welcomeBubble").style.display = "none";
    });

  // Highlight active page link
  const links = document.querySelectorAll(".navBar a");
  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.style.color = "white"; // Change as needed for visual feedback
    }
  });

  // Handle form submission for login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Login logic here
      console.log("Form submitted");
    });
  } else {
    console.error("LoginForm not found");
  }

  //Shop page scripts.
  let slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  document.querySelector(".prev").addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
  });

  document.querySelector(".next").addEventListener("click", function () {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  function updateCarousel() {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${-100 * currentIndex}%)`;
    });
  }
});

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Implement actual login validation here
    // Redirect to home.html upon successful login
    window.location.href = "home.html";
  });
