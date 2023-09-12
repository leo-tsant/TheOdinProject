import "./styles/style.css";
import loadPage from "./components/load-page/index";
import createTask, { createTaskForm } from "./components/create-task";

// const toDoItem = createTask("Workout", "Go to the gym", `${new Date().toLocaleString()}`, "Priority");
loadPage();

createTaskForm();
