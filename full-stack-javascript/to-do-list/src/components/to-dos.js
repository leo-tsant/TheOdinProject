const createToDoItem = (title, description, dueDate, priority) => {
    const toDoItem = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    };

    return toDoItem;
};

export default createToDoItem;
