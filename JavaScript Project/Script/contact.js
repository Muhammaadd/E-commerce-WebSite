var cardsection = document.querySelector(".card");
cardsection.style.opacity = 1;
// form validation
var submit = document.querySelector("button.btn");
var alertmessage = document.querySelectorAll(".formalert");
var username = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var mobile = document.getElementById("mobile");
var textarea = document.getElementById("floatingTextarea2");
var regexp = /[A-Za-z]{1,}@[A-Za-z]{1,}.com$/gi;
var flags = [false,false,false,false,false];
function checkName(){
    if(username.value !=='')
    {
        alertmessage[0].style.display = 'none';
        flags[0] = true;
    }
    else
    {
        alertmessage[0].style.display = 'block';
        flags[0] = false;
    }
}
function checkEmail(){
    if(regexp.test(email.value))
    {
        alertmessage[1].style.display = 'none';
        flags[1] = true;
    }
    else if(!regexp.test(email.value))
    {
        alertmessage[1].style.display = 'block';
        flags[1] = false;
    }
}
function checkpassword(){
    if(password.value.length < 8)
    {
        alertmessage[2].style.display = 'block';
        flags[2] = false;
    }
    else
    {
        alertmessage[2].style.display = 'none';
        flags[2] = true;
    }
}
function checkMobile(){
var mobilregx = /01[0-2]\d{8}$/;
if(mobilregx.test(mobile.value))
    {
        alertmessage[3].style.display = 'none';
        flags[3] = true;
    }
    else if(!regexp.test(email.value))
    {
        alertmessage[3].style.display = 'block';
        flags[3] = false;
    }
}
function checkTextarea(){
    if(textarea.value !=='')
    {
        alertmessage[4].style.display = 'none';
        flags[4] = true;
    }
    else
    {
        alertmessage[4].style.display = 'block';
        flags[4] = false;
    }
}
username.addEventListener('input',checkName);
email.addEventListener('input',checkEmail);
password.addEventListener('input',checkpassword);
mobile.addEventListener('input',checkMobile);
textarea.addEventListener('input',checkTextarea);
submit.addEventListener('click',function(e){
    checkName();
    checkEmail();
    checkpassword();
    checkMobile();
    checkTextarea();
    if(flags[0]&&flags[1]&&flags[2]&&flags[3]&&flags[4])
        e.stopPropagation();
    else
        e.preventDefault();
})
