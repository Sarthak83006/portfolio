// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: Basic contact form alert (no backend)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your message has been submitted.');
  form.reset();
});
