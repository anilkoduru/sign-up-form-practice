var form = document.getElementById("form-data");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("e-mail");
var password = document.getElementById("pass-word");

document.getElementById("btn").addEventListener("click", (event)=>{
    event.preventDefault();
    validate();
});

function validate(){
    if(firstName.value.trim() === '' || firstName.value.trim() === null){
        setError(firstName, 'First Name cannot be empty');
    }
    else{
        setSuccess(firstName);
    }
    if(lastName.value.trim() === '' || lastName.value.trim() === null){
        setError(lastName, 'Last Name cannot be empty');
    }
    else{
        setSuccess(lastName);
    }
    if(email.value.trim() === '' || email.value.trim() === null){
        setError(email, 'Looks like this is not an email'); 
        document.getElementById("e-mail").placeholder = "email@example/com";
    }
    else{
        setSuccess(email);
    }
    if(password.value.trim() === '' || password.value.trim() === null){
        setError(password, 'Password cannot be empty');
    }
    else{
        setSuccess(password);
    }
}

function setError(element, message){
    element.style.borderColor = "red";
    element.placeholder = '';
    var parent = element.parentElement;
    var paragraph = parent.querySelector("small");
    paragraph.style.margin = "5px 0px";
    paragraph.style.paddingBottom = "5px";
    paragraph.style.visibility = "visible";
    if(parent.querySelector(".fa-check-circle").style.visibility === "visible"){
        parent.querySelector(".fa-check-circle").style.visibility = "hidden";
    }
    parent.querySelector(".fa-exclamation-circle").style.visibility = "visible";
    paragraph.textContent = message;

}
function setSuccess(element){
    var parent = element.parentElement;
    var paragraph = parent.querySelector("small");
    if(element.style.borderColor === "red"){
        element.style.borderColor = "grey";
    }
    if(paragraph.style.visibility === "visible"){
        paragraph.style.visibility = "hidden";
    }
    if(parent.querySelector(".fa-exclamation-circle").style.visibility === "visible"){
        parent.querySelector(".fa-exclamation-circle").style.visibility = "hidden";
    }
    parent.querySelector(".fa-check-circle").style.visibility = "visible";
}