import "../../styles/form.css";

const form = () => {
    const container = document.querySelector(".container");

    const overlay = document.createElement("div");
    overlay.id = "new-task-overlay";
    overlay.classList.add("overlay");

    const popupForm = document.createElement("div");
    popupForm.classList.add("popup-form");

    const formTitle = document.createElement("h2");
    formTitle.textContent = "Add New Task";

    const form = document.createElement("form");
    form.id = "new-task-form";

    // Create the input fields for the form
    const inputFields = document.createElement("div");
    inputFields.classList.add("input-fields");

    // Create input fields for Title, Description, Due Date, and Importance
    createInputField("Title:", "text", "title");
    createTextAreaField("Description:", "description");
    createInputField("Due Date:", "date", "dueDate");
    createSelectField("Importance:", "importance", ["High", "Medium", "Low"]);

    // Create the "Add Task" button
    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.textContent = "Add Task";

    // Add input fields and the "Add Task" button to the form
    form.appendChild(inputFields);
    form.appendChild(addButton);

    // Create the close button
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.textContent = "×";

    // Add all elements to the popup form
    popupForm.appendChild(formTitle);
    popupForm.appendChild(form);
    popupForm.appendChild(closeButton);

    // Add the popup form to the overlay
    overlay.appendChild(popupForm);

    // Add the overlay to the document's body
    container.appendChild(overlay);

    // Create a function to simplify input field creation
    function createInputField(labelText, inputType, inputName, isRequired = true) {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("box");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputName);

        const input = document.createElement("input");
        input.type = inputType;
        input.id = inputName;
        input.name = inputName;
        if (isRequired) {
            input.required = true;
        }

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        inputFields.appendChild(fieldContainer);
    }
    // Function to create a text area input field
    function createTextAreaField(labelText, inputName) {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("box");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputName);

        const textarea = document.createElement("textarea");
        textarea.id = inputName;
        textarea.name = inputName;

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(textarea);
        inputFields.appendChild(fieldContainer);
    }

    // Function to create a select input field
    function createSelectField(labelText, inputName, options) {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("box");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputName);

        const select = document.createElement("select");
        select.id = inputName;
        select.name = inputName;
        select.required = true;

        options.forEach((optionText) => {
            const option = document.createElement("option");
            option.value = optionText;
            option.textContent = optionText;
            select.appendChild(option);
        });

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(select);
        inputFields.appendChild(fieldContainer);
    }
};

export default form;
