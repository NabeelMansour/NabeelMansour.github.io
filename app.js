let typed = new Typed('.auto-type', {
  strings: ['Nabeel Mansour'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

document.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');

  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
