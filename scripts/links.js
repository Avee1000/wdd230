const linksURL = "https://avee1000.github.io/wdd230/data/links.json";

// const links = unorderedList.querySelectorAll('.card ul li');
    
async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        displayLinks(data.lessons);
    }
}

function displayLinks(lessons) {

        const length = lessons.length;
        const unorderedList = document.getElementById('links');
        const links = document.createElement('li');

        links.innerHTML = `Week ${length}:`;
        unorderedList.appendChild(links);

}

getLinks();