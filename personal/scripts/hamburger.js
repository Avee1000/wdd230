if (window.location.pathname === "/personal/index.html") {

    document.body.style.overflow = "hidden";
    document.getElementById("myNav").style.height = "100%";
    
    const mainNav = document.querySelector('.navigation');
    const hamburger = document.querySelector("#menu");
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('show');
        // hamburger.classList.toggle('show');
        nav.style.height = "100%";
    });

    document.getElementById("close").addEventListener("click", () => {
        document.body.style.overflow = "";
        document.querySelector("#myNav").style.width = "0";
        document.querySelector('.hero-caption h1').classList.add('hero-caption-h1-fade');
    });



    

    document.querySelector(".delete").addEventListener("click", () => {
        nav.style.height = "";
    });

    const infoButtons = document.querySelectorAll('.info-button');
    const displayClosebutton = document.querySelectorAll('.close-info-button');

    infoButtons.forEach((button) => { 

        button.addEventListener("mouseover", () => {
            const parentElement = button.parentElement;
            const imgTextOverlay = parentElement.nextElementSibling;

            imgTextOverlay.style.height = "100%";
            imgTextOverlay.style.bottom = "0";
        });

        button.addEventListener("mouseout", () => { 
            const parentElement = button.parentElement;
            const imgTextOverlay = parentElement.nextElementSibling;

            imgTextOverlay.style.height = "";
            imgTextOverlay.style.bottom = "";
        });
    });

}


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
if (window.location.pathname === "/personal/reservations.html") {
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
}

/////////////////////////////////////////////////////////////////////

    // JavaScript to scroll to the top of the page when the "Back to top" link is clicked:
    const scrollToTop = document.querySelector(".accordion");

    scrollToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });