/* ===============================
   TABS
================================ */
const tabButtons = document.querySelectorAll(".tab-btn");
const tabSections = document.querySelectorAll(".tab-section");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetTab = button.dataset.tab;

    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabSections.forEach(section => section.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
  });
});

/* ===============================
   STORAGE HELPERS
================================ */
function getEvents() {
  return JSON.parse(localStorage.getItem("events")) || [];
}

function saveEvents(events) {
  localStorage.setItem("events", JSON.stringify(events));
}

/* ===============================
   EVENT STATE
================================ */
let currentEventId = localStorage.getItem("currentEventId");

/* ===============================
   LOAD EXISTING EVENT (DRAFT)
================================ */
document.addEventListener("DOMContentLoaded", () => {
  if (!currentEventId) return;

  const events = getEvents();
  const event = events.find(e => e.id === currentEventId);
  if (!event) return;

  document.getElementById("eventTitle").value = event.title || "";
  document.getElementById("startDate").value = event.startDate || "";
  document.getElementById("endDate").value = event.endDate || "";

  sessions = event.sessions || [];
  renderSessions();
});

/* ===============================
   SAVE EVENT (DRAFT / PUBLISHED)
================================ */
function saveEvent(status) {
  const events = getEvents();

  const title = document.getElementById("eventTitle").value.trim();
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (!title) {
    alert("Event title is required");
    return;
  }

  if (status === "published" && sessions.length === 0) {
    alert("Please create at least one session before publishing.");
    return;
  }

  let event;

  if (currentEventId) {
    event = events.find(e => e.id === currentEventId);
    if (!event) return;

    event.title = title;
    event.startDate = startDate;
    event.endDate = endDate;
    event.status = status;
    event.sessions = sessions;
  } else {
    event = {
      id: crypto.randomUUID(),
      title,
      startDate,
      endDate,
      status,
      sessions,
      createdAt: new Date().toISOString()
    };

    events.push(event);
    localStorage.setItem("currentEventId", event.id);
  }

  saveEvents(events);
  window.location.href = "/attendeeconnect/organiser-app/dashboard/index.html";
}

/* ===============================
   BUTTON BINDINGS
================================ */
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".btn.secondary")
    .addEventListener("click", () => saveEvent("draft"));

  document
    .querySelector(".btn.primary")
    .addEventListener("click", () => saveEvent("published"));
});
