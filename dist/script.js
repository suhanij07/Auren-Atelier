const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-nav');
menuButton?.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.textContent = open ? 'Close' : 'Menu'; });
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = 'Menu'; }));
const track = document.querySelector('.service-track');
document.querySelector('.service-next')?.addEventListener('click', () => track.scrollBy({ left: track.clientWidth * .55, behavior: 'smooth' }));
document.querySelector('.service-prev')?.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth * .55, behavior: 'smooth' }));
const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('#enquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Project enquiry — ${data.get('type')}`;
  const body = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Project type: ${data.get('type')}`,
    `Location: ${data.get('location') || 'Not specified'}`,
    '',
    'Project notes:',
    data.get('message')
  ].join('\n');
  window.location.href = `mailto:hello@aurenatelier.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
