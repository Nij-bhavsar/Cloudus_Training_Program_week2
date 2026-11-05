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

tbtn1.addEventListener("click", (e) => {

    const task1 = input1.value.trim();

    if(task1 === "") {
        return;
    }

    const li1 = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create span for task text
    const span = document.createElement("span");
    span.textContent = task1 + " ";

    // Checkbox click event
    checkbox.addEventListener("change", () => {

        if(checkbox.checked) {
            span.style.textDecoration = "line-through";
        }
        else {
            span.style.textDecoration = "none";
        }

    });

    // Remove button
    const removebtn = document.createElement("button");
    removebtn.textContent = "Remove";

    // Clicking function of remove button
    removebtn.addEventListener("click", () => {
        li1.remove();
    });

    // Append elements
    li1.appendChild(checkbox);
    li1.appendChild(span);
    li1.appendChild(removebtn);

    // Display task
    lists1.appendChild(li1);

    // Clear input
    input1.value = "";

});
