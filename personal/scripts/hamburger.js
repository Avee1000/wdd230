const mainNav = document.querySelector('.navigation');
const hamburger = document.querySelector("#menu");
const nav = document.querySelector('nav');
const toTop = document.querySelector('.accordion');

hamburger.addEventListener('click', () => {
    nav.classList.toggle("show");
});

document.querySelector(".delete").addEventListener("click", () => {
    nav.classList.remove("show");
    const listItems = nav.querySelectorAll('li span'); // Select all li elements within nav
    listItems.forEach(listItem => {
        listItem.classList.toggle("delete-span");
    });
});


// JavaScript to scroll to the top of the page when the "Back to top" link is clicked:
const scrollToTop = document.querySelector(".accordion");

scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


window.addEventListener('scroll', function () {

    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        toTop.classList.add('banner-fixed');
    } else {
        toTop.classList.remove('banner-fixed');
    }
});