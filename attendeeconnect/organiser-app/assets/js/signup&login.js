let mode = "signup";

function setMode(type) {
  mode = type;

  document.querySelectorAll(".toggle-btn")
    .forEach(btn => btn.classList.remove("active"));

  if (type === "login") {
    document.querySelector(".toggle-bg").style.left = "50%";
    document.querySelectorAll(".toggle-btn")[1].classList.add("active");
    document.getElementById("submitBtn").innerText = "Log In";
  } else {
    document.querySelector(".toggle-bg").style.left = "3px";
    document.querySelectorAll(".toggle-btn")[0].classList.add("active");
    document.getElementById("submitBtn").innerText = "Create Account";
  }
}

function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

document.getElementById("submitBtn").addEventListener("click", e => {
  e.preventDefault();
  window.location.href = "/attendeeconnect/organiser-app/auth/profilecreation.html";
});

