import form from "./form";

const createTask = (title, description, dueDate, importance) => {
    const toDoItem = {
        title: title,
        description: description,
        dueDate: dueDate,
        importance: importance,
    };

    return toDoItem;
};

const createTaskForm = () => {
    const addNewTaskButton = document.querySelector(".add-new-task-button");
    form();

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

export { createTaskForm };

export default createTask;
