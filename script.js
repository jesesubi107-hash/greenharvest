const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('inquiryForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  note.textContent = 'Thanks! Your inquiry is ready. Connect the form to your preferred email/WhatsApp service before launch.';
  form.reset();
});
