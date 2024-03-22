const active = window.location.pathname;
console.log(active);
const navLinks = document.querySelectorAll('.navigation a');

for (i = 0; navLinks.length > 0; i++){
  if (navLinks[i].href.includes(`${active}`)) {
    navLinks[i].classList.add('active');
  }
}