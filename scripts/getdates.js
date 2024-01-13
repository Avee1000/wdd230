const modified = document.getElementById('last-modified');
modified.style.color = 'white';

let lastMod = new Date(document.lastModified);

modified.textContent = `LAST MODIFIED: ` + lastMod;