import form from "./form";
import "../styles/task.css";

const tasks = [];

const createTask = (title, description, dueDate, importance) => {
    const toDoItem = {
        title: title,
        description: description,
        dueDate: dueDate,
        importance: importance,
    };

    return toDoItem;
};

const addTask = (task) => {
    tasks.push(task);
    saveTasksToLocalStorage(); // Save tasks to local storage when adding a new task
};

// Function to save tasks to local storage
const saveTasksToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const displayTasks = () => {
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";

    // Clear the tasks array before loading tasks from local storage
    tasks.length = 0;

    // Load tasks from local storage if they exist
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
        tasks.push(...storedTasks);
    }

    tasks.forEach((task) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const dueDate = document.createElement("p");
        dueDate.textContent = task.dueDate;

        const importance = document.createElement("div");
        importance.textContent = task.importance;

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(dueDate);
        card.appendChild(importance);

        tasksContainer.appendChild(card);
    });
};

let firstLoad = true;
const createTaskForm = () => {
    // Only create the form once
    if (firstLoad) {
        form();
        firstLoad = false;

        const addTaskForm = document.getElementById("new-task-form");
        addTaskForm.addEventListener("submit", (e) => {
            const popupOverlay = document.querySelector(".overlay");

            e.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const importance = document.getElementById("importance").value;
            addTask(createTask(title, description, dueDate, importance));
            console.log("clicked");
            displayTasks();
            popupOverlay.style.display = "none";
        });
    }

    const addNewTaskButton = document.querySelector(".add-new-task-button");
    addNewTaskButton.addEventListener("click", () => {
        const popupOverlay = document.querySelector(".overlay");

        popupOverlay.style.display = "flex";
        const closeButton = document.querySelector(".close-button");
        closeButton.addEventListener("click", () => {
            const popupOverlay = document.querySelector(".overlay");

            popupOverlay.style.display = "none";
        });
    });
};

export { createTaskForm, displayTasks };

export default createTask;
