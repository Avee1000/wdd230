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
        firstPassword.value = "";
        secondPassword.value = "";
        showAlert("PASSWORDS DO NOT MATCH", 2000)
    } else if  ((firstPassword.value !== "")&&(firstPassword.value == secondPassword.value)) {
        secondPassword.style.color = "";
        secondPassword.style.borderRightColor = " rgb(4, 110, 4)";
        secondPassword.style.backgroundColor = "";
    }
}

function showAlert(message, duration) {
    const alertDiv = document.createElement("div");
    alertDiv.id = "alert";
    alertDiv.style.display = "inline";
    alertDiv.textContent = message;
    alertDiv.style.position = "fixed";
    alertDiv.style.bottom = "0";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translateX(-50%)";
    alertDiv.style.backgroundColor = "#000000";
    alertDiv.style.opacity = "0.8";
    alertDiv.style.color = "white";
    alertDiv.style.padding = "10px";
    alertDiv.style.fontFamily = "Belanosima";
    alertDiv.style.width = "50%";    
    alertDiv.style.textAlign = "center";
    alertDiv.style.transition = "1s";


    document.body.appendChild(alertDiv);

    setTimeout(() => {
        document.body.removeChild(alertDiv);
    }, duration);
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