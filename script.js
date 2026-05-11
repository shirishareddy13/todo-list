const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = loadTasks;

function addTask() {
    if (taskInput.value === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">
            ${taskInput.value}
        </span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    saveTasks();

    taskInput.value = "";
}

function toggleTask(task) {
    task.classList.toggle("completed");
    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}
