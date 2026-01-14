const eventGrid = document.getElementById("eventGrid");

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
   STATUS AUTO-UPDATE
   (Published → Live by date)
================================ */
function updateEventStatuses(events) {
  const now = new Date();

  return events.map(event => {
    if (
      event.status === "published" &&
      event.startDate &&
      new Date(event.startDate) <= now
    ) {
      event.status = "live";
    }
    return event;
  });
}

/* ===============================
   DASHBOARD RENDER
================================ */
function renderDashboard() {
  let events = getEvents();
  events = updateEventStatuses(events);
  saveEvents(events);

  const drafts = events.filter(e => e.status === "draft");
  const published = events.filter(e => e.status === "published");
  const live = events.filter(e => e.status === "live");

  eventGrid.innerHTML = `
    ${renderCreateEventCard()}
    ${drafts.length ? renderDraftCard() : ""}
    ${live.length ? renderLiveCard() : ""}
    ${renderPastEventCard()}
  `;
}

/* ===============================
   CARD TEMPLATES
================================ */
function renderCreateEventCard() {
  return `
    <div class="event-card">
      <img src="/attendeeconnect/organiser-app/assets/images/createevent.png">
      <div class="card-content">
        <span>Create Event</span>
        <button onclick="openCreateEvent()">Create Event</button>
      </div>
    </div>
  `;
}

function renderDraftCard() {
  return `
    <div class="event-card">
      <img src="/attendeeconnect/organiser-app/assets/images/draftevent.png">
      <div class="card-content">
        <span>View Drafts</span>
        <button onclick="openDrafts()">Continue</button>
      </div>
    </div>
  `;
}

function renderLiveCard() {
  return `
    <div class="event-card">
      <img src="/attendeeconnect/organiser-app/assets/images/liveevent.png">
      <div class="card-content">
        <span>Live Event</span>
        <button onclick="openLive()">Manage</button>
      </div>
    </div>
  `;
}

function renderPastEventCard() {
  return `
    <div class="event-card">
      <img src="/attendeeconnect/organiser-app/assets/images/pastevent.png">
      <div class="card-content">
        <span>View Past Event</span>
        <button>View</button>
      </div>
    </div>
  `;
}

/* ===============================
   NAVIGATION
================================ */
function openCreateEvent() {
  window.location.href = "/attendeeconnect/organiser-app/dashboard/createevent.html";
}

function openDrafts() {
  window.location.href = "/attendeeconnect/organiser-app/dashboard/createevent.html";
}

function openLive() {
  alert("Live dashboard coming next");
}

/* ===============================
   INIT
================================ */
document.addEventListener("DOMContentLoaded", renderDashboard);
