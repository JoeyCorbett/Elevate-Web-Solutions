// Get popup
document.addEventListener("DOMContentLoaded", function () {
  // Grab Modal
  const SignUpModal = document.getElementById("signupModal");

  // Grab Sign Up Button
  const SignUpButton = document.querySelector(".Sign-up-button");

  // Grab Contact Button
  const ContactButton = document.querySelector(".Contact-Button")

  // Grab Backdrop
  const backdrop = document.querySelector(".modal-backdrop");

  // Grab Span which closes
  const CloseButton = document.querySelector(".modal .close");

  // Open Modal when clicked
  SignUpButton.onclick = function () {
    SignUpModal.style.display = "flex";
    // Enable animation
    SignUpModal.classList.add("modal-animate");
    backdrop.style.display = "flex";
    // Disable scrolling on page
    document.body.classList.add("no-scroll");
  };

  // Open Modal when clicked
  ContactButton.onclick = function () {
    SignUpModal.style.display = "flex";
    // Enable animation
    SignUpModal.classList.add("modal-animate");
    backdrop.style.display = "flex";
    // Disable scrolling on page
    document.body.classList.add("no-scroll");
  };

  // Close Modal when exit pressed
  CloseButton.onclick = function () {
    SignUpModal.style.display = "none";
    backdrop.style.display = "none";
    // Disable animation
    SignUpModal.classList.remove("show");
    // Enable scrolling on page
    document.body.classList.remove("no-scroll");
    // Reset form fields
    document.querySelector("#Sign-up-form form").reset();
  };

  document.getElementById("modalBackdrop").onclick = function (event) {
    if (event.target == this) {
      this.style.display = "none";
      // Enable scrolling on page
      document.body.classList.remove("no-scroll");
      // Reset form fields
      document.querySelector("#Sign-up-form form").reset();
    }
  };

  // Prevent submit button from re-directing
  document
    .getElementById("Sign-up-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });

  // Formats phone field for valid input
  document.getElementById("phone").addEventListener("input", function (e) {
    let x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });

  // Detects operating system and adjusts icons in modal to fit input fields
  const isWindows = navigator.platform.toLowerCase().includes("win");

  // Checks for windows and fixes icon formatting
  if (isWindows) {
    document.querySelectorAll(".modal .fa-user, .modal .fa-envelope, .modal .fa-phone, .modal .fa-briefcase").forEach(function (icon) {
      const currentTop = parseFloat(icon.style.top || getComputedStyle(icon).top);
    icon.style.top = currentTop + 1.8 + "%";
    });
  }

  // Checks for windows and fixes padding on modal
  if (isWindows) {
    const modal = document.querySelector(".modal");
    const currentHeight = parseFloat(modal.style.height || getComputedStyle(modal).height);
    modal.style.height = currentHeight + 12 + "px";
    console.log("got it");
  }

});