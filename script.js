const form = document.getElementById("form");
const email = document.getElementById("email");
const mainCard = document.getElementById("mainCard");
const emailSpan = document.getElementById("emailAdd");
const successCard = document.getElementById("successCard")
const successText = document.getElementById("successText");
const error = document.getElementById("errorMsg");
const emailRegex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
var userEmail = "";

if (form.addEventListener) {
    form.addEventListener("submit", checkForm, false);
} else {
    form.attachEvent('onsubmit', checkForm);
}

function checkForm(e) {
    e.preventDefault();
    // check if email formatted correctly
    if (!emailRegex.test(email.value)) {
        // display error
        error.style.display = "flex";
        // change input to error state
        email.style.color = "#FE6350";
        email.style.background = "#FFE8E6";
        email.style.borderColor = "#FE6350"
        email.style.color
        return;
    } 
    // hide main card
    mainCard.style.display = "none";

    // show success card
    const textNode = document.createTextNode(email.value);
    emailSpan.append(textNode);
    successCard.style.display = "flex";
}