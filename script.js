/* ============================================================
   FATHIMA MEHRIN V S — Portfolio Scripts
   File: script.js
   ============================================================ */

/* ── DYNAMIC YEAR ── */
document.getElementById('year').textContent = new Date().getFullYear();


/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


/* ── SCROLL PROGRESS BAR ── */
const progressBar = document.getElementById('progress');

window.addEventListener('scroll', () => {
  const scrolled  = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const pct = (scrolled / maxScroll) * 100;
  progressBar.style.width = pct + '%';
});


/* ── ACTIVE NAV LINK ON SCROLL ── */
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
});


/* ── SCROLL REVEAL (IntersectionObserver) ── */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger each element slightly
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));


/* ── 3D TILT EFFECT ON HERO CARD ── */
const tiltCard = document.getElementById('tiltCard');

tiltCard.addEventListener('mousemove', e => {
  const rect = tiltCard.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width  - 0.5;
  const y = (e.clientY - rect.top)  / rect.height - 0.5;
  tiltCard.style.transform =
    `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale(1.02)`;
});

tiltCard.addEventListener('mouseleave', () => {
  tiltCard.style.transform = '';
});


/* ── HOW TO ENABLE "VIEW WORK" BUTTONS ──────────────────────────
   In index.html, each project card has a commented-out button
   like this inside .project-links:

     <!-- <a href="#" class="btn btn-outline btn-sm" target="_blank">
            <i class="fab fa-github"></i> View Work
          </a> -->

   To activate it:
     1. Remove the HTML comment markers (<!-- and -->)
     2. Replace the href="#" with your real GitHub or live demo URL
        e.g. href="https://github.com/FathimaMehrinVS/FixTheGap"

   That's it — the button is already fully styled and ready to go!
   ──────────────────────────────────────────────────────────────── */