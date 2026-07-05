let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li>
                ${task}
                <button onclick="deleteTask(${index})">Delete</button>
            </li>
        `;
    });
}

function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value.trim() !== "") {
        tasks.push(input.value);
        saveTasks();
        renderTasks();
        input.value = "";
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

renderTasks();
