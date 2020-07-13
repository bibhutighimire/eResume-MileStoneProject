// Citation
//@Link https://www.youtube.com/watch?v=rsd4FNGTRBw

var form=document.getElementById("form");
var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var email=document.getElementById("email");
var subject=document.getElementById("subject");
var message=document.getElementById("message");

form.addEventListener("submit", (c)=> {
    
    c.preventDefault();
    CheckInputs();

});

function CheckInputs() {
    const fnamevalue=fname.value.trim();
    const lnamevalue=lname.value.trim();
    const emailvalue=email.value.trim();
    const subjectvalue=subject.value.trim();
    const messagevalue=message.value.trim();

    if(fnamevalue==="") {

        ErrorResult(fname, "First Name can not be blank");

    }
    else {
        SuccessResult(fname);
    }

    if(lnamevalue==="") {

        ErrorResult(lname, "Last Name can not be blank");

    }
    else {
        SuccessResult(lname);
    }

    if(emailvalue==="") {

        ErrorResult(email, "Last Name can not be blank");

    }
    else {
        SuccessResult(email);
    }

}
//
function ErrorResult(input,message) {
    const formcontrol= input.parentElement; //form-control
    const small=formcontrol.querySelector("small"); 
    small.innerText=message;
    formcontrol.className= "form-control error";
}
function SuccessResult(input) {
    const formcontrol= input.parentElement; //form-control
    const small=formcontrol.querySelector("small");     
    formcontrol.className= "form-control success";
}


//@link https://www.w3resource.com/javascript/form/email-validation.php
//This will check the validity of email address
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}