
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

// Function to check if an element is in the viewport
function isInViewport(element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle fade-in effect for elements in viewport
function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (isInViewport(element)) {
            document.querySelector('.benefits-text h1').classList.add('visible');
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Initial check for elements in viewport on page load
fadeInElements();

// Add scroll event listener to check for elements entering viewport
window.addEventListener('scroll', fadeInElements);

/////////////////////////////////////////////////////////////////////
const infoButtons = document.querySelectorAll('.info-button');
const displayClosebutton = document.querySelectorAll('.close-info-button');

infoButtons.forEach((button) => { 

    button.addEventListener("click", () => {
        const parentElement = button.parentElement;
        const imgTextOverlay = parentElement.nextElementSibling;
        const closeButton = button.nextElementSibling;

        imgTextOverlay.style.height = "100%";
        imgTextOverlay.style.bottom = "0";
        button.classList.add('remove-info');
        closeButton.classList.add('show-remove-button');
    });
});

displayClosebutton.forEach((closeButton) => {

    closeButton.addEventListener("click", () => {
        const closeButtonParentElement = closeButton.parentElement;
        const infoButton = closeButton.previousElementSibling;
        const imgTextOverlay = closeButtonParentElement.nextElementSibling;

        imgTextOverlay.style.height = "0";
        imgTextOverlay.style.bottom = "100%";
        closeButton.classList.remove('show-remove-button');
        infoButton.classList.remove('remove-info');
    });
});

