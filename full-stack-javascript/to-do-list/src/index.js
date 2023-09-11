import "./styles/style.css";
import loadPage from "./components/load-page.js";
import createToDoItem from "./components/to-dos";
import allTasks from "./components/all-tasks";
import today from "./components/today";
import thisWeek from "./components/this-week";
import important from "./components/important";

// const toDoItem = createToDoItem("Workout", "Go to the gym", `${new Date().toLocaleString()}`, "Priority");
loadPage();

const content = document.querySelector(".content");
const allTasksTab = document.getElementById("all-tasks");
const todayTab = document.getElementById("today");
const thisWeekTab = document.getElementById("this-week");
const importantTab = document.getElementById("important");

let firstLoad = true;

function handleTabClick(callback) {
    content.innerHTML = "";
    callback();
}

allTasksTab.addEventListener("click", () => handleTabClick(allTasks));
todayTab.addEventListener("click", () => handleTabClick(today));
thisWeekTab.addEventListener("click", () => handleTabClick(thisWeek));
importantTab.addEventListener("click", () => handleTabClick(important));

if (firstLoad) {
    handleTabClick(allTasks);
    firstLoad = false;
}
