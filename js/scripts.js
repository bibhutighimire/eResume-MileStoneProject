// Citation
//@Link https://www.youtube.com/watch?v=rsd4FNGTRBw

let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let reenteremail = document.getElementById("reenteremail");
let subject = document.getElementById("subject");
let message = document.getElementById("message");


 const c=document.getElementById("sendEmailLink")
 if(c) {
     c.addEventListener("click", (e) => {
     e.preventDefault();
     checkInputs();
 });
}

function redirect()
{
    console.log("hi from redirect");
    //window.location.href = "mailto:ghimirebibhuti@gmail.com";

//GETTING SUBJECT VALUE
    let subject = document.getElementById("subject").value;

let message = document.getElementById("message").value;
console.log(message);
    console.log("above is message value from redirect");
    document.location.href = "mailto:ghimirebibhuti@gmail.com?subject="
    + subject +
         "&body="  + message ;



    fname.value = "";
 lname.value = "";
 email.value = "";
 reenteremail.value = "";
 subject = "";
 message= "";

}
//https://www.c-sharpcorner.com/blogs/block-specific-bad-words-using-javascript-jquery
function swearWordsTracker() {  
    let hasSwearWords=false;
    let restrictedWords = new Array("kill", "fight", "slap","feldercarb", "frack", "skinjob", "vulgacarb");  
    let txtInput = document.getElementById("message").value;  
    let error = 0;  
    for (let i = 0; i < restrictedWords.length; i++) {  
        let val = restrictedWords[i];  
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
    let messagevalue = message.value.trim();
    //https://stackoverflow.com/questions/14452524/show-alert-if-any-bad-filtered-word-is-present-in-form-input
    //https://stackoverflow.com/questions/17384992/how-to-block-bad-words-upon-form-submit

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

//back to top button
//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//end of back to top button https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

//sticky main>nav starts
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_sticky
// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
//sticky main>nav ends as well as citation