import form from "./form";
import editTaskForm from "./edit-task-form";
import "../styles/task.css";
import trashIcon from "../images/trash.png";
import editIcon from "../images/edit.svg";

const tasks = [];
let currentId = 0;

const createTask = (title, description, dueDate, importance) => {
    const toDoItem = {
        id: currentId++, // Assign the currentId and then increment it.
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

const displayTasks = (whichTasks) => {
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";

    // Clear the tasks array before loading tasks from local storage
    tasks.length = 0;

    // Load tasks from local storage if they exist
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
        tasks.push(...storedTasks);
    }

    let filteredTasks = [];

    if (whichTasks === "today") {
        filteredTasks = tasks.filter((task) => {
            const today = new Date();
            const taskDueDate = new Date(task.dueDate);
            return (
                taskDueDate.getDate() === today.getDate() &&
                taskDueDate.getMonth() === today.getMonth() &&
                taskDueDate.getFullYear() === today.getFullYear()
            );
        });
    } else if (whichTasks === "thisWeek") {
        filteredTasks = tasks.filter((task) => {
            const today = new Date();
            const taskDueDate = new Date(task.dueDate);
            const todayDay = today.getDate();
            const taskDueDateDay = taskDueDate.getDate();
            const differenceInDays = Math.abs(todayDay - taskDueDateDay);
            return differenceInDays <= 7;
        });
    } else if (whichTasks === "important") {
        filteredTasks = tasks.filter((task) => {
            return task.importance === "High";
        });
    } else if (whichTasks === "allTasks") {
        filteredTasks = tasks;
    }

    filteredTasks.forEach((task) => {
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

        if (task.importance === "High") {
            card.classList.add("high-importance");
        } else if (task.importance === "Medium") {
            card.classList.add("medium-importance");
        } else if (task.importance === "Low") {
            card.classList.add("low-importance");
        }

        const deleteCardButton = document.createElement("img");
        deleteCardButton.classList.add("delete-card-button");
        deleteCardButton.src = trashIcon;

        deleteCardButton.addEventListener("click", () => {
            deleteTask(whichTasks, task);
        });

        const editCardButton = document.createElement("img");
        editCardButton.classList.add("edit-card-button");
        editCardButton.src = editIcon;

        editCardButton.addEventListener("click", () => {
            editTask(whichTasks, task);
        });

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(dueDate);
        card.appendChild(importance);
        card.appendChild(deleteCardButton);
        card.appendChild(editCardButton);

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
            const popupOverlay = document.getElementById("new-task-overlay");

            e.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const importance = document.getElementById("importance").value;
            addTask(createTask(title, description, dueDate, importance));
            displayTasks("allTasks");
            popupOverlay.style.display = "none";
        });
    }

    const addNewTaskButton = document.querySelector(".add-new-task-button");
    addNewTaskButton.addEventListener("click", () => {
        const popupOverlay = document.getElementById("new-task-overlay");

        popupOverlay.style.display = "flex";
        const closeButton = document.querySelector(".close-button");
        closeButton.addEventListener("click", () => {
            const popupOverlay = document.getElementById("new-task-overlay");

            popupOverlay.style.display = "none";
        });
    });
};

const deleteTask = (whichTasks, task) => {
    const container = document.querySelector(".container");
    let popupOverlay = document.querySelector(".delete-card-overlay");

    // Only create the popup once
    if (!popupOverlay) {
        popupOverlay = document.createElement("div");
        popupOverlay.classList.add("delete-card-overlay");
        const popup = document.createElement("div");
        popup.classList.add("delete-card-popup");
        const popupHeader = document.createElement("div");
        popupHeader.classList.add("delete-card-popup-header");
        const popupContent = document.createElement("div");
        popupContent.classList.add("delete-card-popup-content");
        const popupButtons = document.createElement("div");
        popupButtons.classList.add("delete-card-popup-buttons");
        const yesButton = document.createElement("button");
        yesButton.classList.add("yes-button");
        const noButton = document.createElement("button");
        noButton.classList.add("no-button");
        const closeButton = document.createElement("img");
        closeButton.classList.add("close-button");

        popupOverlay.style.display = "flex";
        popupHeader.textContent = "Delete Task";
        popupContent.textContent = "Are you sure you want to delete this task?";
        yesButton.textContent = "Yes";
        noButton.textContent = "No";

        yesButton.addEventListener("click", () => {
            const index = tasks.indexOf(task);
            tasks.splice(index, 1);
            saveTasksToLocalStorage();
            displayTasks(whichTasks);
            popupOverlay.style.display = "none";
        });

        noButton.addEventListener("click", () => {
            popupOverlay.style.display = "none";
        });

        closeButton.addEventListener("click", () => {
            popupOverlay.style.display = "none";
        });

        popupOverlay.addEventListener("click", (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = "none";
            }
        });

        popupHeader.appendChild(closeButton);
        popupButtons.appendChild(yesButton);
        popupButtons.appendChild(noButton);
        popup.appendChild(popupHeader);
        popup.appendChild(popupContent);
        popup.appendChild(popupButtons);
        popupOverlay.appendChild(popup);
        container.appendChild(popupOverlay);
    }
    // If the popup already exists, just display it
    popupOverlay.style.display = "flex";
};

const editTask = (whichTasks, task) => {
    // Call the editTaskForm function with the task to be edited
    editTaskForm(task);
    const editOverlay = document.querySelector("#edit-task-overlay");

    editOverlay.style.display = "flex";

    // Get the form from the DOM
    const form = document.querySelector("#edit-task-form");

    // Add an event listener for the form submission
    form.addEventListener("submit", (event) => {
        // Prevent the form from being submitted normally
        event.preventDefault();

        // Fetch the new values from the form
        const title = form.querySelector("#title").value;
        const description = form.querySelector("#description").value;
        const dueDate = form.querySelector("#dueDate").value;
        const importance = form.querySelector("#importance").value;

        // Update the task object with the new values
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        task.importance = importance;

        // Save the updated tasks to local storage
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasks.map((t) => {
            if (t.id === task.id) {
                return {
                    ...t,
                    title: title,
                    description: description,
                    dueDate: dueDate,
                    importance: importance,
                };
            }
            return t;
        });

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        // Re-display the tasks
        displayTasks(whichTasks);

        // Close the form
        editOverlay.remove();
    });

    // Add an event listener for the cancel button
    const cancelButton = form.querySelector("#cancel-button");
    cancelButton.addEventListener("click", () => {
        // Close the form without making any changes
        editOverlay.remove();
    });
};

export { createTaskForm, displayTasks };

export default createTask;
