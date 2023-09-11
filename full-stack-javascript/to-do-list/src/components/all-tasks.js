const allTasks = () => {
    const content = document.querySelector(".content");

    const header = document.createElement("div");
    header.classList.add("content-header");
    header.textContent = "All Tasks";

    const addNewTaskButton = document.createElement("button");
    addNewTaskButton.classList.add("add-new-task-button");
    addNewTaskButton.textContent = "+ New Task";

    header.appendChild(addNewTaskButton);

    content.appendChild(header);
};

export default allTasks;
