// // async practice
// console.log("1. start")

// const { use } = require("react");

// setTimeout(() => {
//     console.log("2. this prints after 2 seconds");
// }, 2000);

// console.log("3. End")

// // Promise practice

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data arrived!");
//     }, 1000);
// })
// myPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// // async/ await (in easiest way)

// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function main() {
//     console.log("Start");
//     await wait(2000);
//     console.log("After 2 seconds");
// }
// main();

// // try/catch (catch errors)
// // example
// try {
//     console.log("Start");

//     let result = undefined.name;
//     console.log("End")
// }
// catch(error) {
//     console.log("Something went wrong!");
// }

// // fetch() to get data from an API

// async function getUsers() {
//     try {
//         const response = await
//     fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error) {
//         console.log("Error:", error.message);
//     }
// }
// getUsers();

// Show Loading and Error
const status1 = document.querySelector("#status1")
const userlist = document.querySelector("#userlist")

async function loadUsers() {
    try {
        status1.textContent = "Loading....";  // at starting point
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok) throw new error("Server error!!"); //throws error if not load.
        const users = await res.json();

        status1.textContent = ""; // hide the loading
        users.forEach(U => {
            const li = document.createElement("li");
            li.textContent = `${U.name} (${U.email})`; //shows only name with their email.
            userlist.appendChild(li);
        });
    }
    catch (error) {
            status1.textContent = "Something went wrong; " + error.message;
        }
}
loadUsers();

// // Debounce (do not call the API on every letter)


// Demo task
const status2 = document.querySelector("#status2")
const userlist1 = document.querySelector("#userlist1")

async function loadUsers1() {
    try {
        status2.textContent = "Loading....";  // at starting point
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok) throw new error("Server error!!"); //throws error if not load.
        const users = await res.json();

        status2.textContent = ""; // hide the loading
        users.forEach(U => {
            const li1 = document.createElement("li");
            li1.textContent = `${U.name} (${U.email} ,city: ${U.address.city})`; 
            userlist1.appendChild(li1);
        });
    }
    catch (error) {
            status2.textContent = "Something went wrong; " + error.message;
        }
}
loadUsers1();

// Tasks(Easy)
// Task-1 : Use setTimeout to show "Welcome" on the page after 3 seconds.
const greet = document.querySelector("#greet")

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function main() {
    await wait(3000);
    greet.textContent = "Welcome!!!"
}
main();

// Task-2:Get users from JSONPlaceholder and show a list of names.

const status4 = document.querySelector("#status4")
const list1 = document.querySelector("#list1")
async function getUser() {
    try{
        status4.textContent = "Loading!!"
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        status4.textContent = "";
        data.forEach(U => {
            const li = document.createElement("li");
            li.textContent = U.name
            list1.appendChild(li)
            
        });
        
        console.log(data)
    }
    catch (error){
       status4.textContent = "Something went wrong;" + error.message;
    }
}
getUser();

// Task-3
const status3 = document.querySelector("#status3")
const userpost = document.querySelector("#userpost")

async function loadUserpost() {
    try {
        status3.textContent = "Loading....";  // at starting point
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!res.ok) throw new error("Server error!!"); //throws error if not load.
        const users = await res.json();

        status3.textContent = ""; // hide the loading
        users.slice(0, 10).forEach(U => {      // use slicing here for showing only 10 user titles
            const li1 = document.createElement("li");
            li1.textContent = U.title; 
            userpost.appendChild(li1);
        });
    }
    catch (error) {
            status3.textContent = "Something went wrong; " + error.message;
        }
}
loadUserpost();