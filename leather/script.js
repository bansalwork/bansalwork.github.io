// Navbar scroll effect
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(
    '.hero-content, .hero-image, ' +
    '.craft-image, .craft-text, ' +
    '.gallery-item, ' +
    '.narrative blockquote, .narrative .section-title, ' +
    '.inquiry-text'
  ).forEach(el => {
    if (!el.classList.contains('gallery-item')) {
      el.classList.add('reveal');
    } else {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }
  });

  // Stagger gallery items
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 200 + i * 100);
  });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
