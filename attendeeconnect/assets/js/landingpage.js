const getStartedBtn = document.querySelector('.btn-primary');
const roleModal = document.getElementById('roleModal');
const closeModal = document.getElementById('closeModal');

// OPEN MODAL
getStartedBtn.addEventListener('click', () => {
  roleModal.style.display = 'flex';
});

// CLOSE MODAL
closeModal.addEventListener('click', () => {
  roleModal.style.display = 'none';
});

// CLOSE ON BACKDROP CLICK
roleModal.addEventListener('click', (e) => {
  if (e.target === roleModal) {
    roleModal.style.display = 'none';
  }
});

const attendeeBtn = document.getElementById('attendeeBtn');

let deferredPrompt = null;

// Capture the install prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// Handle attendee click
attendeeBtn.addEventListener('click', async () => {
  // If app is already running in standalone mode → open it
  if (window.matchMedia('(display-mode: standalone)').matches) {
    window.location.href = '/attendeeconnect/attendee-app/auth/intro.html';
    return;
  }

  // If install prompt is available → show install flow
  if (deferredPrompt) {
    const confirmed = confirm('Install the Attendee App to continue.');

    if (!confirmed) return;

    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
      deferredPrompt = null;
    }
  } else {
    // Fallback (iOS Safari or unsupported)
    alert(
      'To continue, install this app:\n\n' +
      '• On iPhone: Share → Add to Home Screen\n' +
      '• On Android: Menu → Install App'
    );
  }
});

