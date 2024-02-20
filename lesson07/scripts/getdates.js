const modified = document.getElementById('last-modified');

let lastMod = new Date(document.lastModified);

modified.innerHTML += lastMod;

