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
  const live = events.filter(e => e.status === "live");

  eventGrid.innerHTML = `
    ${renderCreateEventCard()}
    ${renderLiveCard(live)}
    ${renderPastEventCard()}
    ${renderDraftsCard(drafts)}
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

function renderLiveCard(liveEvents) {
  if (!liveEvents.length) return "";
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

function renderDraftsCard(drafts) {
  return `
    <div class="event-card">
      <img src="/attendeeconnect/organiser-app/assets/images/draftevent.png">
      <div class="card-content">
        <span>Draft Events (${drafts.length})</span>
        <button onclick="openDraftsModal()">View Drafts</button>
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

function openLive() {
  window.location.href = "/attendeeconnect/organiser-app/dashboard/liveevent.html";
}

/* ===============================
   PROFILE MODAL
================================ */
const profileIcon = document.getElementById("profileIcon");
const profileModal = document.getElementById("profileModal");
const closeModal = document.getElementById("closeModal");
const profileForm = document.getElementById("profileForm");

profileIcon.addEventListener("click", () => profileModal.style.display = "flex");
closeModal.addEventListener("click", () => profileModal.style.display = "none");
window.addEventListener("click", e => { if (e.target === profileModal) profileModal.style.display = "none"; });
profileForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  alert(`Profile updated!\nName: ${name}\nEmail: ${email}`);
  profileModal.style.display = "none";
});

/* ===============================
   DRAFTS MODAL
================================ */
let draftsModal, draftsList;

function openDraftsModal() {
  const drafts = getEvents().filter(e => e.status === "draft");

  // Create modal if not exists
  if (!draftsModal) {
    draftsModal = document.createElement("div");
    draftsModal.id = "draftsModal";
    draftsModal.className = "modal";
    draftsModal.innerHTML = `
      <div class="modal-content">
        <span class="close" id="closeDraftsModal">&times;</span>
        <h2>Draft Events</h2>
        <ul id="draftsList" style="list-style:none; padding:0;"></ul>
      </div>
    `;
    document.body.appendChild(draftsModal);
    draftsList = document.getElementById("draftsList");

    document.getElementById("closeDraftsModal").addEventListener("click", () => draftsModal.style.display = "none");
    draftsModal.addEventListener("click", e => { if (e.target === draftsModal) draftsModal.style.display = "none"; });
  }

  draftsList.innerHTML = "";
  if (!drafts.length) {
    draftsList.innerHTML = "<li>No drafts available</li>";
  } else {
    drafts.forEach(draft => {
      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.alignItems = "center";
      li.style.marginBottom = "12px";

      const title = draft.title || "Untitled Event";

      li.innerHTML = `
        <span>${title}</span>
        <div>
          <button onclick="continueDraft('${draft.id}')">Continue</button>
          <button onclick="deleteDraft('${draft.id}')" style="margin-left:8px; background:#dc3545; color:#fff; border:none; padding:5px 10px; border-radius:6px;">Delete</button>
        </div>
      `;
      draftsList.appendChild(li);
    });
  }

  draftsModal.style.display = "flex";
}

function continueDraft(id) {
  localStorage.setItem("currentEventId", id);
  window.location.href = "/attendeeconnect/organiser-app/dashboard/createevent.html";
}

function deleteDraft(id) {
  if (!confirm("Are you sure you want to delete this draft?")) return;
  let events = getEvents();
  events = events.filter(e => e.id !== id);
  saveEvents(events);
  renderDashboard();
  openDraftsModal();
}

/* ===============================
   INIT
================================ */
document.addEventListener("DOMContentLoaded", renderDashboard);
