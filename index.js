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
    backdrop.style.display = "flex";
    // Disable scrolling on page
    document.body.classList.add('no-scroll');
  };

  // Close Modal when exit pressed
  CloseButton.onclick = function () {
    SignUpModal.style.display = "none";
    backdrop.style.display = "none";
    // Enable scrolling on page
    document.body.classList.remove('no-scroll');
  };
});
