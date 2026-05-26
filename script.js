// Navbar scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar'); if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});
// Hamburger
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
if (ham && mob) ham.addEventListener('click', () => { ham.classList.toggle('open'); mob.classList.toggle('open'); });
function closeMobile() { if (ham) ham.classList.remove('open'); if (mob) mob.classList.remove('open'); }
// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el,i) => {
  el.style.transitionDelay = (Math.floor(i % 4) * 0.1) + 's';
  obs.observe(el);
});
