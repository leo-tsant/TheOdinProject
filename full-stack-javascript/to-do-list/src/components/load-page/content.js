import allTasks from "../sidebar-items/all-tasks";
import today from "../sidebar-items/today";
import thisWeek from "../sidebar-items/this-week";
import important from "../sidebar-items/important";

const content = () => {
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
};

export default content;