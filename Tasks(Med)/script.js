// Task-4

// const { isValidElement } = require("react");

let form = document.getElementById("myform")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let nameerror = document.getElementById("nameerror");
    let emailerror = document.getElementById("emailerror");
    let passerror = document.getElementById("passerror")
    
    // clears previous errors
    nameerror.textContent = "";
    emailerror.textContent = "";
    passerror.textContent = "";

    // initialize function true
    let isValid = true;
    
    // name validation
    if(name.trim() === "") {
        nameerror.textContent = "Name should not be empty!!";
        isValid = false;
    }
    // email validation
    if(!email.includes('@')) {
        emailerror.textContent = "Enter a valid email";
        isValid = false;
    }
    // password validation
    if(pass.length <= 6){
        passerror.textContent = "Password must be greater than 6 characters"
        isValid = false;
    }

    if(isValid) {
        alert("Form submitted succesfullly!")
        form.reset();
    }
})

