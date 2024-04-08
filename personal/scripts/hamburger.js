const mainNav = document.querySelector('.navigation');
const hamburger = document.querySelector("#menu");
const nav = document.querySelector('nav');

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




