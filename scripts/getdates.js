const modified = document.getElementById('last-modified');
modified.style.color = 'white';

let lastMod = new Date(document.lastModified);

modified.innerHTML += lastMod;

// Calculating the number of page visits..........


