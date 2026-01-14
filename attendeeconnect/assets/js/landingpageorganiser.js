const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next-btn');
const backBtn = document.querySelector('.back-btn');
const skipBtn = document.querySelector('.skip-btn');

let current = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');

  backBtn.disabled = current === 0;

  if (current === slides.children.length - 1) {
    nextBtn.textContent = 'Continue';
  } else {
    nextBtn.textContent = 'Next';
  }
}

nextBtn.addEventListener('click', () => {
  if (current < slides.children.length - 1) {
    current++;
    updateSlide();
  } else {
    window.location.href = '/attendeeconnect/organiser-app/auth/signup&login.html';
  }
});

backBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateSlide();
  }
});

skipBtn.addEventListener('click', () => {
  window.location.href = '/attendeeconnect/organiser-app/auth/signup&login.html';
});

// Initialize
updateSlide();
