const tabButtons = document.querySelectorAll(".tab-btn");
const tabSections = document.querySelectorAll(".tab-section");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetTab = button.dataset.tab;

    // Remove active state from all
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabSections.forEach(section => section.classList.remove("active"));

    // Activate selected tab
    button.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
  });
});


/* ===============================
   EVENT STORAGE HELPERS
================================ */
function getEvents() {
  return JSON.parse(localStorage.getItem("events")) || [];
}

function saveEvents(events) {
  localStorage.setItem("events", JSON.stringify(events));
}

/* ===============================
   SAVE EVENT ACTIONS
================================ */
function saveDraftEvent() {
  saveEvent("draft");
}

function publishEvent() {
  saveEvent("published");
}

function saveEvent(status) {
  const events = getEvents();

  const newEvent = {
    id: Date.now(),
    title: "Untitled Event", // later replace with form input
    status: status,
    startDate: null, // later used for live logic
    createdAt: new Date().toISOString()
  };

  events.push(newEvent);
  saveEvents(events);

  // Redirect back to dashboard
  window.location.href = "/attendeeconnect/organiser-app/dashboard/index.html";
}

/* ===============================
   BUTTON BINDINGS
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const saveDraftBtn = document.querySelector(".btn.secondary");
  const publishBtn = document.querySelector(".btn.primary");

  if (saveDraftBtn) saveDraftBtn.addEventListener("click", saveDraftEvent);
  if (publishBtn) publishBtn.addEventListener("click", publishEvent);
});
