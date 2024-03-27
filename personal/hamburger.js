window.addEventListener("load", () => {
    document.body.style.overflow = "hidden";
    document.getElementById("myNav").style.width = "100%";
});

document.querySelector("#close").addEventListener("click", () => {
    document.body.style.overflow = "";
    document.querySelector("#myNav").style.height = "0";
});


const mainNav = document.querySelector('.navigation');
const hamburger = document.querySelector("#menu");
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    // hamburger.classList.toggle('show');
    nav.style.height = "100%";
});

document.querySelector(".delete").addEventListener("click", () => {
    nav.style.height = "";
});


// JavaScript to scroll to the top of the page when the "Back to top" link is clicked:
const scrollToTop = document.querySelector(".accordion");

scrollToTop.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});


// const hidden = document.getElementById("hidden-links");
// const hamburgerMenu = document.querySelector(".hamburger-menu");

// hamburgerMenu.addEventListener("click", () => {
//     event.stopPropagation(); // Prevent the click event from reaching the window click listener
//     hidden.style.display = (hidden.style.display === "none") ? "block" : "none";
// });

// Add a click event listener to the window to close the element when clicking outside
// window.addEventListener("click", () => {
//     hidden.style.display = "none";
// });