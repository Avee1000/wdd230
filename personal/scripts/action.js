window.addEventListener("load", () => {
    document.body.style.overflow = "hidden";
    document.getElementById("myNav").style.width = "100%";
});

document.querySelector("#close").addEventListener("click", () => {
    document.body.style.overflow = "";
    document.querySelector("#myNav").style.height = "0";
});

