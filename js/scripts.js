// Citation
//@Link https://www.youtube.com/watch?v=rsd4FNGTRBw

var form = document.getElementById("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var reenteremail = document.getElementById("reenteremail");
var subject = document.getElementById("subject");
var message = document.getElementById("message");


 document.getElementById("sendEmailLink").addEventListener("click", (c) => {
     c.preventDefault();
     checkInputs();
 });

function redirect()
{
    console.log("hi from redirect");
    window.location.href = "mailto:ghimirebibhuti@gmail.com";
}
//https://www.c-sharpcorner.com/blogs/block-specific-bad-words-using-javascript-jquery
function swearWordsTracker() {  
    let hasSwearWords=false;
    var restrictedWords = new Array("kill", "fight", "slap");  
    var txtInput = document.getElementById("message").value;  
    var error = 0;  
    for (var i = 0; i < restrictedWords.length; i++) {  
        var val = restrictedWords[i];  
        if ((txtInput.toLowerCase()).indexOf(val.toString()) > -1) {  
            error = error + 1;  

        }  
    }  

    if (error > 0) {  
        ErrorResult(message, "You have used BAD word in the message. We will not tolerate this.");
        hasSwearWords=true;        
    }  
    else {  
        redirect();       
    }  
    
}  
//end of https://www.c-sharpcorner.com/blogs/block-specific-bad-words-using-javascript-jquery
function checkInputs() {

    console.log("hi from check input");
    const fnamevalue = fname.value.trim();
    console.log(fnamevalue);
    const lnamevalue = lname.value.trim();
    const emailvalue = email.value.trim();
    const reenteremailvalue = reenteremail.value.trim();
    const subjectvalue = subject.value.trim();
    let mmessagevalue = message.value.trim();
    //https://stackoverflow.com/questions/14452524/show-alert-if-any-bad-filtered-word-is-present-in-form-input
    //https://stackoverflow.com/questions/17384992/how-to-block-bad-words-upon-form-submit

    let badwords = /crap|ugly|brat|fool|fuck|fucking|f\*cking|f\*ck|bitch|b\*tch|shit|sh\*t|fool|dumb|couch potato|arse|arsehole|asshole|\*ssh\*l\*|\*\*\*\*|c\*ck|\*\*\*\*sucker|c\*cks\*ck\*r|\*\*\*\*|c\*nt|dickhead|d\*c\*h\*a\*|\*\*\*\*|f\*c\*|\*\*\*\*wit|f\*ckw\*t|fuk|f\*k|fuking|f\*k\*ng|mother\*\*\*\*er|m\*th\*rf\*ck\*r|\*\*\*\*\*\*|n\*gg\*r|pussy|p\*ssy|\*\*\*\*|sh\*t|wanker|w\*nk\*r|wankers|w\*nk\*rs|whore|wh\*r\*|slag| sl\*g|\*\*\*\*\*|b\*tch|f u c k|f\*c\*|b.i.t.c.h|b\*tch|d-i-c-k|d\*\*\*/gi;
var messagevalue=mmessagevalue.replace(badwords,"*****");
let hasErrors=false;

    if (fnamevalue === "") {
        ErrorResult(fname, "First Name can not be blank");
        hasErrors=true;
    }
    else {
        SuccessResult(fname);
    }
    if (lnamevalue === "") {
        ErrorResult(lname, "Last Name can not be blank");
        hasErrors=true;
    }
    else {
        SuccessResult(lname);
    }
    if (emailvalue === "") {
        ErrorResult(email, "Email Address can not be blank");
        hasErrors=true;
    }
    else if (!ValidateEmail(emailvalue)) {
        ErrorResult(email, "Enter valid Email Address");
        hasErrors=true;
    }
    else {
        SuccessResult(email);
    }
    if (reenteremailvalue === "") {
        ErrorResult(reenteremail, "Email Address can not be blank");
        hasErrors=true;
    }
    else if (!ValidateEmail(reenteremailvalue)) {
        ErrorResult(reenteremail, "Enter valid Email Address");
        hasErrors=true;
    }
    else if (emailvalue !== reenteremailvalue) {
        ErrorResult(reenteremail, "Email Address entered do not match")
        hasErrors=true;
    }
    else {
        SuccessResult(reenteremail);
    }

    if (subjectvalue === "") {

        ErrorResult(subject, "Subject can not be blank");
        hasErrors=true;

    }
    else {
        SuccessResult(subject);
    }

    if (messagevalue === "") {

        ErrorResult(message, "Message can not be blank");
        hasErrors=true;

    }
    else if (messagevalue === "feldercarb" || messagevalue === "frack" || messagevalue === "skinjob" || messagevalue === "vulgacarb"  || messagevalue === "bitch") {
        ErrorResult(message, "Message should be in Proper Words");
        hasErrors=true;
    }

    else {
        SuccessResult(message);
    }
    //https://stackoverflow.com/questions/14452524/show-alert-if-any-bad-filtered-word-is-present-in-form-input

    if(hasErrors===false){
        swearWordsTracker();
     }
  

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

