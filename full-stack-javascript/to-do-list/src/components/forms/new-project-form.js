import checkmarkIcon from "../../images/checkmark.svg";
import displayProjectTasks from "../sidebar-items/display-project-tasks";
import threeDotsIcon from "../../images/three-dots-vertical.svg";
import allTasks from "../sidebar-items/all-tasks";

const projects = JSON.parse(localStorage.getItem("projects")) || [];

const newProjectForm = () => {
    const projectsList = document.getElementById("projects-list");

    const popupForm = document.createElement("div");
    popupForm.classList.add("new-project-popup-form");

    const projectForm = document.createElement("form");
    projectForm.id = "new-project-form";

    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("box");

    const label = document.createElement("label");
    label.textContent = "Project Name";
    label.setAttribute("for", "project-name");

    const input = document.createElement("input");
    input.type = "text";
    input.id = "project-name";
    input.name = "project-name";
    input.required = true;

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add Project";

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        projectsList.removeChild(projectForm);
    });

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const newTaskOverlay = document.getElementById("new-task-overlay");
        if (newTaskOverlay) {
            newTaskOverlay.remove();
        }

        const projectName = document.getElementById("project-name").value;

        const project = {
            name: projectName,
        };

        projects.push(project);
        localStorage.setItem("projects", JSON.stringify(projects));

        projectsList.removeChild(projectForm);
        displayProjects();
        displayProjectTasks(project);
    });

    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);

    projectForm.appendChild(fieldContainer);
    projectForm.appendChild(submitButton);
    projectForm.appendChild(cancelButton);

    projectsList.insertBefore(projectForm, projectsList.lastChild);
};

const displayProjects = () => {
    const projectsList = document.getElementById("projects-list");
    const liElements = projectsList.querySelectorAll("li");

    liElements.forEach((li) => {
        if (li.id !== "add-project") {
            li.remove();
        }
    });

    projects.forEach((project) => {
        const projectItem = document.createElement("li");
        projectItem.classList.add("sidebar-project-item");
        projectItem.id = project.name;

        const projectItemText = document.createElement("div");
        projectItemText.classList.add("sidebar-item-text");
        projectItemText.textContent = project.name;

        const projectItemIcon = document.createElement("img");
        projectItemIcon.classList.add("sidebar-item-icon");
        projectItemIcon.src = checkmarkIcon;

        const moreOptionsButton = document.createElement("img");
        moreOptionsButton.classList.add("more-options-button");
        moreOptionsButton.src = threeDotsIcon;

        projectItem.addEventListener("click", () => {
            displayProjectTasks(project);
        });

        moreOptionsButton.addEventListener("click", () => {
            const popupForm = document.createElement("div");
            popupForm.classList.add("more-options-popup-form");

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", (event) => {
                event.stopPropagation();
                const index = projects.findIndex((projectItem) => projectItem.name === project.name);
                projects.splice(index, 1);
                localStorage.setItem("projects", JSON.stringify(projects));
                projectsList.removeChild(projectItem);
                const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
                const updatedTasks = tasks.filter((task) => task.project !== project.name);
                localStorage.setItem("tasks", JSON.stringify(updatedTasks));

                const content = document.querySelector(".content");
                content.innerHTML = "";
                allTasks();
            });

            popupForm.appendChild(deleteButton);

            projectItem.appendChild(popupForm);
        });

        projectItem.appendChild(projectItemIcon);
        projectItem.appendChild(projectItemText);
        projectItem.appendChild(moreOptionsButton);
        projectsList.insertBefore(projectItem, projectsList.lastChild);
    });
};

export { displayProjects };
export default newProjectForm;
