const mail = document.querySelector(".email");

function validate(mail) {
    let regx = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (regx.test(mail)) {
        return true
    } else {
        return false
    }
}

const button = document.querySelector("#notify");

button.addEventListener("click", e => {
    const error = document.querySelector("#error-message");
    const errorDiv = document.querySelector(".error");
    if (validate(mail.value) === false) {
        error.classList.replace("error-text", "error-invalid");
        mail.style.border = "1px solid hsl(354, 100%, 66%)";
    } 
    else {
        errorDiv.style.display = "none";
        mail.style.border = "1px solid hsl(223, 100%, 88%)";
    }
})