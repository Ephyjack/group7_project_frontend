const steps = document.querySelectorAll('.step');
let current = 0;

const showStep = () => {
  steps.forEach(s => s.classList.remove('active'));
  steps[current].classList.add('active');
};

document.addEventListener('click', e => {
  if (e.target.closest('.next')) {
    current++;
    showStep();
  }

  if (e.target.closest('.prev')) {
    current--;
    showStep();
  }

  if (e.target.classList.contains('chip') ||
      e.target.classList.contains('goal-card') ||
      e.target.classList.contains('list-item')) {

    const parent = e.target.closest('.selectable');
    if (parent?.classList.contains('single')) {
      parent.querySelectorAll('.active')
        .forEach(el => el.classList.remove('active'));
    }

    e.target.classList.toggle('active');
  }
});

/* FINAL REDIRECT */
document.getElementById('goHome')?.addEventListener('click', () => {
window.location.href = '/attendeeconnect/attendee-app/home.html';
});

showStep();
