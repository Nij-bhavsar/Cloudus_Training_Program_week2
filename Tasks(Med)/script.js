// task-4
let btn = document.getElementById("data")
let loader = document.getElementById("loader")
let errormsg = document.getElementById("error")

btn.addEventListener("click", async () => {
    loader.style.display = "block";
    error.textContent = "loading...";
    await new Promise (resolve => setTimeout(resolve, 2000));
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        error.textContent = "Data loaded succesfully!";
        errormsg.style.color = "blue"
    }
    catch (error) {
        errormsg.textContent = "Error: " + error.message;
        errormsg.style.color = "red";
        console.log(error)
    }
    finally {
        loader.style.display = "none";
    }
})

// task-5

let inp = document.querySelector("#searchbox")
let lists = document.querySelector("#lists")
let status1 = document.querySelector("#status")

let users = [];

async function getUsers() {
    try{
        status1.textContent = "Loading users...";

        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        users = await res.json();

        status1.textContent = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            lists.appendChild(li);
        });
    }
    catch (error) {
        status1.textContent = "Error: " + error.message;
        status1.style.color = "red";
        console.log(error)
    }
}
getUsers();

inp.addEventListener("input", async () => {
    const searchValue = inp.value.toLowerCase();

    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchValue)
    });

    lists.innerHTML = "";
    filteredUsers.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        lists.appendChild(li);
        lists.style.color = "green";
    });
})

// task-6
let setup = document.querySelector("#setup")
let btn1 = document.querySelector("#btn1")
let joke = document.querySelector("#joke")
let status2 = document.querySelector("#status2")

btn1.addEventListener("click", async() => {
    try{
        status2.textContent = "Loading joke...";
        await new Promise(resolve => setTimeout(resolve, 2000));
        // setup.textContent = "";
        // joke.textContent = "";

        const res = await fetch("https://official-joke-api.appspot.com/random_joke");

        const data = await res.json();
        setup.textContent = data.setup;
        joke.textContent = data.joke;

        status2.textContent = "";
    }
    catch (error) {
        status2.textContent = "Error: " + error.message;
        status2.style.color = "red"; 
        console.log(error);
    }
});