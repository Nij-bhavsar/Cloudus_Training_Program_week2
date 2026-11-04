// uses this selectors for selecting html code
const title = document.getElementById("title");
const para = document.querySelector(".para");
const btn = document.querySelector("#btn");

console.log(title);
console.log(para);
console.log(btn);
// used this for changing the title color & font size directly
title.style.color = "gray";  // to change the title color
title.style.fontSize = "40px"

// practiced the basic events one by one
// used "click" event
btn.addEventListener("click", function() {
    title.textContent = "Button clicked!!, you did it";
});

// used mouseout event, when pointer goes outside the button then the title color changes
btn.addEventListener("mouseover", function () {
    title.style.color = "red"
}
)

// mouseover event for changing text color for title
btn.addEventListener("mouseout", function () {
    title.style.color = "brown"
}
)

// used click event and background color changes to yellow
 btn.addEventListener("click", function() {
    document.bgColor = "skyblue"
 })

//  used mouseup to change the paragraph text-size
 btn.addEventListener("mouseup", function() {
    para.style.fontSize = "25px"
 })

//  practice the input event while we input our name and then it greets with our name live.
let uname = document.getElementById("uname")
let result = document.getElementById("result")

uname.addEventListener("input", function() {
    result.textContent ="Hello, " + uname.value; // used this to greet with the input name.
}
)

// read input value and greet with the input
const input = document.querySelector("#nameInp");
const greetbtn = document.querySelector("#greetBtn")
const output = document.querySelector("#output")

greetbtn.addEventListener("click", () => {
    const name = input.value;
    output.textContent = `Hello, ${name}!`; // displays greetins when click on the button
})

// create and remove elements in list

const list = document.querySelector("#list")

const li = document.createElement("li")
li.textContent = "New List"
list.appendChild(li)

// to remove use this
li.remove();

// form handling
const form = document.querySelector("#myform")

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop the page from reloading
    const email = document.querySelector("#email").value;
    const error = document.querySelector("#error")
     if(!email.includes("@")) {
        error.textContent = "Enter the valid mail"
     }
     else {
        alert("Submitted");
     }
})

// localStorage (save data in the browser)

// saved the theme to dark
localStorage.setItem("theme", "dark");

// read the theme
const theme = localStorage.getItem("theme")
console.log(theme);

const username = document.getElementById("username")
const savebtn = document.getElementById("sub")
const data = document.getElementById("data")

savebtn.addEventListener("click", function() {
    localStorage.setItem("username", username.value);
    alert("Name saved succesfully!!")
})

const savedname = localStorage.getItem("username")

if (savedname) {
    data.textContent = "Welcomeback, " + savedname
}

// counter app
let count = 0
const display = document.querySelector("#count")

function update(){
    display.textContent = count;
}

document.querySelector("#minus").addEventListener("click", () => {
    if(count > 0){
    count--;
    update();
    }
    
})
document.querySelector("#plus").addEventListener("click", () => {
    count++;
    update();
})
document.querySelector("#reset").addEventListener("click", () => {
    count = 0;
    update();
})

// task-1

const title1 = document.querySelector("#title1")
const btn1 = document.querySelector("#btn1")
const clrs = ["red", "blue", "green"]

let index = 0;
btn1.addEventListener("click", () =>{
    title1.style.color = clrs[index];
    index++;
    if(index === clrs.length){
        index = 0;
    }

})

// task-2

const input1 = document.querySelector("#input1")
const output1 = document.querySelector("#output1")
const sub1 = document.querySelector("#sub1")

sub1.addEventListener("click", () => {
    const name1 = input1.value;
    output1.textContent = `Hello, ${name1}!`;
})
