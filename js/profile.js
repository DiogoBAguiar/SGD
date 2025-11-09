const editModalBtn = document.getElementById('editModalBtn');
const editModal = document.getElementById('editModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');

editModalBtn.addEventListener('click', () => {
  editModal.classList.remove('hidden');
});


closeModalBtn.addEventListener('click', () => {
  editModal.classList.add('hidden');
});

cancelModalBtn.addEventListener('click', () => {
  editModal.classList.add('hidden');
});


const homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', () => {
  window.location.href = "../templates/dashboard.html";
});
