const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const comparison = document.querySelector('[data-comparison]');
const range = comparison.querySelector('.compare-range');
const before = comparison.querySelector('[data-before]');
const handle = comparison.querySelector('[data-handle]');
range.addEventListener('input', () => {
  before.style.width = `${range.value}%`;
  handle.style.left = `${range.value}%`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const services = data.getAll('service').join(', ') || 'Exterior cleaning';
  const message = `Hi Whiting Exterior Services! I'd like a free quote.\n\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email') || 'Not provided'}\nLocation: ${data.get('location')}\nServices: ${services}\nDetails: ${data.get('details') || 'None'}`;
  window.location.href = `sms:+19163054358?&body=${encodeURIComponent(message)}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
