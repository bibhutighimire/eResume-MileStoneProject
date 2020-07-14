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
    // sendEmail();
});

function CheckInputs() {
    const fnamevalue = fname.value.trim();
    const lnamevalue = lname.value.trim();
    const emailvalue = email.value.trim();
    const reenteremailvalue = reenteremail.value.trim();
    const subjectvalue = subject.value.trim();
    let mmessagevalue = message.value.trim();
    //https://stackoverflow.com/questions/14452524/show-alert-if-any-bad-filtered-word-is-present-in-form-input
    //https://stackoverflow.com/questions/17384992/how-to-block-bad-words-upon-form-submit

    let badwords = /crap|ugly|brat|fool|fuck|fucking|f\*cking|f\*ck|bitch|b\*tch|shit|sh\*t|fool|dumb|couch potato|arse|arsehole|asshole|\*ssh\*l\*|\*\*\*\*|c\*ck|\*\*\*\*sucker|c\*cks\*ck\*r|\*\*\*\*|c\*nt|dickhead|d\*c\*h\*a\*|\*\*\*\*|f\*c\*|\*\*\*\*wit|f\*ckw\*t|fuk|f\*k|fuking|f\*k\*ng|mother\*\*\*\*er|m\*th\*rf\*ck\*r|\*\*\*\*\*\*|n\*gg\*r|pussy|p\*ssy|\*\*\*\*|sh\*t|wanker|w\*nk\*r|wankers|w\*nk\*rs|whore|wh\*r\*|slag| sl\*g|\*\*\*\*\*|b\*tch|f u c k|f\*c\*|b.i.t.c.h|b\*tch|d-i-c-k|d\*\*\*/gi;
var messagevalue=mmessagevalue.replace(badwords,"*****")
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
    // else if (messagevalue === "feldercarb" || messagevalue === "frack" || messagevalue === "skinjob" || messagevalue === "vulgacarb"  || messagevalue === "bitch") {
    //     ErrorResult(message, "Message should be in Proper Words");
    // }

    // else {
    //     SuccessResult(message);
    // }
    //https://stackoverflow.com/questions/14452524/show-alert-if-any-bad-filtered-word-is-present-in-form-input



}

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

// function sendEmail() {
//     const fnamevalue = document.getElementById("fname").value;
//     const lnamevalue = document.getElementById("lname").value;
//     const emailvalue = document.getElementById("email").value;
//     const subjectvalue = document.getElementById("subject").value;
//     const messagevalue = document.getElementById("message").value;

//     // Email.send({
//     //     Host : "smtp.gmail.com",
//     //     Username : "ghimirebibhuti@gmail.com",
//     //     Password : "Visitusa1$",
//     //     To : 'bibhuti.ghimire@gmail.com',
//     //     From : "ghimirebibhuti@gmail.com",
//     //     Subject : "This is the subject",
//     //     Body : "And this is the body",
//     //         }).then(
//     //   message => alert(message)
//     // );
//     // 8d2a5eb1-45e6-4e07-9f6a-9bd9c6147f41
//     Email.send({
//         SecureToken : "8d2a5eb1-45e6-4e07-9f6a-9bd9c6147f41",
//         To : 'bibhuti.ghimire@gmail.com',
//         From : "ghimirebibhuti@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body",
//             }).then(
//       message => alert(message)
//     );
// }