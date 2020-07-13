// Citation
//@Link https://www.youtube.com/watch?v=rsd4FNGTRBw

var form = document.getElementById("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var reenteremail = document.getElementById("reenteremail");
var subject = document.getElementById("subject");
var message = document.getElementById("message");

form.addEventListener("submit", (c) => {

    c.preventDefault();
    CheckInputs();

});

function CheckInputs() {
    const fnamevalue = fname.value.trim();
    const lnamevalue = lname.value.trim();
    const emailvalue = email.value.trim();
    const reenteremailvalue = reenteremail.value.trim();
    const subjectvalue = subject.value.trim();
    const messagevalue = message.value.trim();

    if (fnamevalue === "") {

        ErrorResult(fname, "First Name can not be blank");

    }
    else {
        SuccessResult(fname);
    }

    if (lnamevalue === "") {

        ErrorResult(lname, "Last Name can not be blank");

    }
    else {
        SuccessResult(lname);
    }

    if (emailvalue === "") {

        ErrorResult(email, "Email Address can not be blank");

    }
    else if (!ValidateEmail(emailvalue)) {
        ErrorResult(email, "Enter valid Email Address");
    }
    else {
        SuccessResult(email);
    }
    if (reenteremailvalue === "") {
        ErrorResult(reenteremail, "Email Address can not be blank");
    }
    else if (!ValidateEmail(reenteremailvalue)) {
        ErrorResult(reenteremail, "Enter valid Email Address");
    }
    else if (emailvalue !== reenteremailvalue) {
        ErrorResult(reenteremail, "Email Address entered do not match")
    }
    else {
        SuccessResult(reenteremail);
    }

    if (subjectvalue === "") {

        ErrorResult(subject, "Subject can not be blank");

    }
    else {
        SuccessResult(subject);
    }

    if (messagevalue === "") {

        ErrorResult(message, "Message can not be blank");

    }
    else {
        SuccessResult(message);
    }

}
//
function ErrorResult(input, message) {
    const formcontrol = input.parentElement; //form-control
    const small = formcontrol.querySelector("small");
    small.innerText = message;
    formcontrol.className = "form-control error";
}
function SuccessResult(input) {
    const formcontrol = input.parentElement; //form-control
    const small = formcontrol.querySelector("small");
    formcontrol.className = "form-control success";
}


//@link https://www.w3resource.com/javascript/form/email-validation.php
//This will check the validity of email address
//https://codepen.io/FlorinPop17/pen/OJJKQeK
function ValidateEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}