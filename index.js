// Get popup
document.addEventListener("DOMContentLoaded", function () {
  // Grab Modal
  const SignUpModal = document.getElementById("signupModal");

  // Grab Button
  const SignUpButton = document.querySelector(".Sign-up-button");

  // Grab Span which closes
  const CloseButton = document.querySelector(".modal .close");

  // Open Modal when clicked
  SignUpButton.onclick = function () {
    SignUpModal.style.display = "flex";
  };

  // Close Modal when exit pressed
  CloseButton.onclick = function () {
    SignUpModal.style.display = "none";
  };

  // When user clicks anywhere outside of modal close
  window.onclick = function (event) {
    if (event.target == SignUpModal) {
      SignUpModal.style.display = "none";
    }
  };
});
