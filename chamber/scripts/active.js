const active = window.location.pathname;
const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach((link) => {
  if (link.href.includes(`${active}`)) {
    link.classList.add('active');
  }
});