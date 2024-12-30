let tasks = [];

const addTask = (title, status, priority) => {
    tasks.push({ title, status, priority: parseInt(priority, 10) });
    renderTasks(tasks);
};

const filterByStatus = (status) => {
    const filteredTasks = tasks.filter(task => task.status === status);
    renderTasks(filteredTasks);
};

const findHighPriorityTask = () => {
    const highPriorityTask = tasks.find(task => task.priority === 5);
    if (highPriorityTask) {
        alert(`High Priority Task: ${highPriorityTask.title}`);
    } else {
        alert("No high-priority task found.");
    }
};

const renderTasks = (taskArray) => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    taskArray.forEach(task => {
        const li = document.createElement("li");
        li.className = task.status === "Completed" ? "completed" : "";
        li.innerHTML = `<span>Task:</span> ${task.title}, <span>Status:</span> ${task.status}, <span>Priority:</span> ${task.priority}`;
        taskList.appendChild(li);
    });
};

document.getElementById("taskForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const status = document.getElementById("status").value;
    const priority = document.getElementById("priority").value;
    addTask(title, status, priority);
    e.target.reset();
});

document.getElementById("filterPending").addEventListener("click", () => {
    filterByStatus("Pending");
});

document.getElementById("filterCompleted").addEventListener("click", () => {
    filterByStatus("Completed");
});

document.getElementById("showHighPriority").addEventListener("click", () => {
    findHighPriorityTask();
});
