// const mainNav = document.querySelector('.navigation');
const hamburgerIcon = document.querySelector("#menu");
// const nav = document.querySelector('nav');

hamburgerIcon.addEventListener('click', () => {
    document.querySelector(".navigation").classList.toggle('show');
    hamburgerIcon.classList.toggle('show');
});



