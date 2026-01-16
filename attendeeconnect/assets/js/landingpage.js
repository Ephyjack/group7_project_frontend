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
