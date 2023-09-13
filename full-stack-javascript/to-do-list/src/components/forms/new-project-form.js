// import displayProjects from "../display-projects";

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

        const projectName = document.getElementById("project-name").value;

        const project = {
            name: projectName,
            tasks: [],
        };

        projects.push(project);
        localStorage.setItem("projects", JSON.stringify(projects));

        projectsList.removeChild(projectForm);
        displayProjects();
    });

    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);

    projectForm.appendChild(fieldContainer);
    projectForm.appendChild(submitButton);
    projectForm.appendChild(cancelButton);

    projectsList.append(projectForm);
};

const displayProjects = () => {
    const projectsList = document.getElementById("projects-list");

    projectsList.innerHTML = "";

    projects.forEach((project) => {
        const projectItem = document.createElement("li");
        projectItem.classList.add("sidebar-item");
        projectItem.id = project.name;

        const projectItemText = document.createElement("div");
        projectItemText.classList.add("sidebar-item-text");
        projectItemText.textContent = project.name;

        const projectItemIcon = document.createElement("img");
        projectItemIcon.classList.add("sidebar-item-icon");
        projectItemIcon.src = "assets/checkmark.svg";

        projectItem.appendChild(projectItemIcon);
        projectItem.appendChild(projectItemText);
        projectsList.appendChild(projectItem);
    });

    const addProjectItem = document.createElement("li");
    addProjectItem.classList.add("sidebar-item");
    addProjectItem.id = "add-project";

    const addProjectItemText = document.createElement("div");
    addProjectItemText.classList.add("sidebar-item-text");
    addProjectItemText.textContent = "Add Project";

    const addProjectItemIcon = document.createElement("img");
    addProjectItemIcon.classList.add("sidebar-item-icon");
    addProjectItemIcon.src = "assets/checkmark.svg";

    addProjectItem.appendChild(addProjectItemIcon);
    addProjectItem.appendChild(addProjectItemText);
    projectsList.appendChild(addProjectItem);
};

export default newProjectForm;
