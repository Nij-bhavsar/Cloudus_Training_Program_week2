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

// Task-5

const savebtn = document.querySelector("#savebtn")

const savedcolor = localStorage.getItem("bgcolor")
if(savedcolor){
    document.bgColor = savedcolor;
}

savebtn.addEventListener("click", function() {
    document.bgColor = "Skyblue";
    localStorage.setItem("bgcolor", "Skyblue");
})

// Task-6

let input = document.getElementById("task")
let tbtn = document.getElementById("tbtn")
let lists = document.getElementById("lists")

tbtn.addEventListener("click", () => {
    const task = input.value.trim();
    if(task === ""){
        return
    }
    const li = document.createElement("li");
    li.textContent = task + " ";

    // remove button
    const removebtn = document.createElement("button");
    removebtn.textContent = "Remove";

    // clicking function of remove button
    removebtn.addEventListener("click", () => {
        li.remove();
    })
    // button for remove
    li.appendChild(removebtn);

    lists.appendChild(li);
    input.value = ""
})
