const firstPassword = document.getElementById('pwd');

const secondPassword = document.getElementById('repeated_pwd');


secondPassword.addEventListener('focusout',  checkSame);

function checkSame() {
    if (firstPassword.value == "") {
        secondPassword.style.borderRightColor = " rgb(166, 7, 7)";
    }else if ((firstPassword.value !== "")&&(firstPassword.value !== secondPassword.value)) {
        secondPassword.style.borderRightColor = " rgb(166, 7, 7)";
        secondPassword.style.color ="red"
        secondPassword.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    } else if  ((firstPassword.value !== "")&&(firstPassword.value == secondPassword.value)) {
        secondPassword.style.color = "";
        secondPassword.style.borderRightColor = " rgb(4, 110, 4)";
        secondPassword.style.backgroundColor = "";
    }
}


//RANGE//

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}