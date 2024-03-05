const baseURL = "https://avee1000.github.io/wdd230/";
const linksURL = "https://avee1000.github.io/wdd230/data/links.json";

async function getLinkList() {
    
    const response = await fetch(linksURL);
    const data = response.json();
    displayLinks(data.lessons);
}