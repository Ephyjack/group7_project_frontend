const screens = document.querySelectorAll('.screen');
let current = 0;

function showScreen(index) {
  screens.forEach(s => s.classList.remove('active'));
  screens[index].classList.add('active');
  current = index;
}

/* Auto transitions */
setTimeout(() => showScreen(1), 1500); // purple → white
setTimeout(() => showScreen(2), 2500); // white → intro

function nextScreen() {
  if (current < screens.length - 1) {
    showScreen(current + 1);
  }
}

function prevScreen() {
  if (current > 2) {
    showScreen(current - 1);
  }
}

function goToAuth() {
  window.location.href = "/attendeeconnect/attendee-app/auth/signup&login.html";
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
