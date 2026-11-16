// Task-7
let input = document.getElementById("task")
let tbtn = document.getElementById("tbtn")
let lists = document.getElementById("lists")

tbtn.addEventListener("click", (e) => {
    const task = input.value.trim();
    if(task === ""){
        return
    }
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    // used span to add check box with the 
    const span = document.createElement("span")
    span.textContent = task + " ";
    
    // remove button
    const removebtn = document.createElement("button");
    removebtn.textContent = "Remove";

    // clicking function of remove button
    removebtn.addEventListener("click", () => {
        li.remove();
    })

    // button for remove
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(removebtn);
    
    lists.appendChild(li);
    input.value = "";
})

// Task-8

let input1 = document.getElementById("task1");
let tbtn1 = document.getElementById("tbtn1");
let lists1 = document.getElementById("lists1");

let all = document.getElementById("all");
let done = document.getElementById("done");
let pending = document.getElementById("pending");

let tasks = JSON.parse(localStorage.getItem("lists1")) || [];

// Display tasks
function displayTasks(filter = "all") {

    lists1.innerHTML = "";

    tasks.forEach(task => {

        if(filter === "done" && !task.completed) return;
        if(filter === "pending" && task.completed) return;

        const li1 = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        const span = document.createElement("span");
        span.textContent = task.text + " ";

        if(task.completed) {
            span.style.textDecoration = "line-through";
        }

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            
            if(checkbox.checked) {
                span.style.textDecoration = "line-through";
            }
            else {
                span.style.textDecoration = "none";
            }

            localStorage.setItem("list1", JSON.stringify(tasks));

            displayTasks(filter);
        });

        const removebtn = document.createElement("button");
        removebtn.textContent = "Remove";

        removebtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t !== task);
            localStorage.setItem("list1", JSON.stringify(tasks));
            displayTasks(filter);
        });

        li1.appendChild(checkbox);
        li1.appendChild(span);
        li1.appendChild(removebtn);

        lists1.appendChild(li1);
    });
}
// Load old tasks
displayTasks();

// Add task
tbtn1.addEventListener("click", (e) => {
    e.preventDefault();

    const task1 = input1.value.trim();

    if(task1 === "") {
        return;
    }

    tasks.push({
        text: task1,
        completed: false
    });

    localStorage.setItem("list1", JSON.stringify(tasks));

    input1.value = "";

    displayTasks();
});

// All filter
all.addEventListener("click", () => {
    displayTasks("all");
});

// Done filter
done.addEventListener("click", () => {
    displayTasks("done");
});

// Pending filter
pending.addEventListener("click", () => {
    displayTasks("pending");
});