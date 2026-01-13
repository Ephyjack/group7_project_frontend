feather.replace();

let hasEvent = false;
let insideEvent = false;

const screens = document.querySelectorAll(".screen");
const nav = document.getElementById("bottomNav");
const navButtons = nav.querySelectorAll("button");

function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  navButtons.forEach(btn => btn.classList.remove("active"));
  navButtons.forEach(btn => {
    if (btn.dataset.target === id) {
      btn.classList.add("active");
    }
  });
}

/* REGISTRATION */
function registerEvent() {
  hasEvent = true;
  showScreen("dashboard");
}

/* ENTER EVENT */
function openEvent() {
  insideEvent = true;
  nav.style.display = "flex";
  showScreen("home");
}

/* NAVIGATION */
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    showScreen(btn.dataset.target);
  });
});

/* INITIAL STATE */
showScreen("no-event");
