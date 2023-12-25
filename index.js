// Get popup
document.addEventListener("DOMContentLoaded", function () {
  // Grab Modal
  const SignUpModal = document.getElementById("signupModal");

  // Grab Button
  const SignUpButton = document.querySelector(".Sign-up-button");

  // Grab Backdrop

  const backdrop = document.querySelector(".modal-backdrop");

  // Grab Span which closes
  const CloseButton = document.querySelector(".modal .close");

  // Open Modal when clicked
  SignUpButton.onclick = function () {
    SignUpModal.style.display = "flex";
    // Enable animation
    SignUpModal.classList.add('modal-animate');
    backdrop.style.display = "flex";
    // Disable scrolling on page
    document.body.classList.add("no-scroll");
  };

  // Close Modal when exit pressed
  CloseButton.onclick = function () {
    SignUpModal.style.display = "none";
    backdrop.style.display = "none";
    // Disable animation
    SignUpModal.classList.remove('show');
    // Enable scrolling on page
    document.body.classList.remove("no-scroll");
  };

  document.getElementById("modalBackdrop").onclick = function (event) {
    if (event.target == this) {
      this.style.display = "none";
      // Enable scrolling on page
      document.body.classList.remove("no-scroll");
    }
  };
});
