import checkmarkIcon from "../images/checkmark.svg";

const loadPage = () => {
    const container = document.querySelector(".container");

    // HEADER
    const header = document.querySelector(".header");

    const headerText = document.createElement("div");
    headerText.textContent = "To Do List";
    headerText.classList.add("header-text");

    const headerIcon = document.createElement("img");
    headerIcon.className = "icon";
    headerIcon.src = checkmarkIcon;

    header.appendChild(headerIcon);
    header.appendChild(headerText);

    // SIDEBAR
    const sidebar = document.querySelector(".sidebar");

    // Home List
    const homeList = document.createElement("div");
    const homeListTitle = document.createElement("div");
    homeListTitle.classList.add("sidebar-title");
    homeListTitle.textContent = "Home";

    const homeListItems = document.createElement("ul");

    const homeListItemsAllTasks = document.createElement("li");
    homeListItemsAllTasks.classList.add("sidebar-item");
    const homeListItemsAllTasksText = document.createElement("div");
    homeListItemsAllTasksText.classList.add("sidebar-item-text");
    homeListItemsAllTasksText.textContent = "All Tasks";
    const homeListItemsAllTasksIcon = document.createElement("img");
    homeListItemsAllTasksIcon.classList.add("sidebar-item-icon");
    homeListItemsAllTasksIcon.src = checkmarkIcon;

    homeListItemsAllTasks.appendChild(homeListItemsAllTasksIcon);
    homeListItemsAllTasks.appendChild(homeListItemsAllTasksText);
    homeListItems.appendChild(homeListItemsAllTasks);

    const homeListItemsToday = document.createElement("li");
    homeListItemsToday.classList.add("sidebar-item");
    const homeListItemsTodayText = document.createElement("div");
    homeListItemsTodayText.classList.add("sidebar-item-text");
    homeListItemsTodayText.textContent = "Today";
    const homeListItemsTodayIcon = document.createElement("img");
    homeListItemsTodayIcon.classList.add("sidebar-item-icon");
    homeListItemsTodayIcon.src = checkmarkIcon;

    homeListItemsToday.appendChild(homeListItemsTodayIcon);
    homeListItemsToday.appendChild(homeListItemsTodayText);
    homeListItems.appendChild(homeListItemsToday);

    const homeListItemsThisWeek = document.createElement("li");
    homeListItemsThisWeek.classList.add("sidebar-item");
    const homeListItemsThisWeekText = document.createElement("div");
    homeListItemsThisWeekText.classList.add("sidebar-item-text");
    homeListItemsThisWeekText.textContent = "This Week";
    const homeListItemsThisWeekIcon = document.createElement("img");
    homeListItemsThisWeekIcon.classList.add("sidebar-item-icon");
    homeListItemsThisWeekIcon.src = checkmarkIcon;

    homeListItemsThisWeek.appendChild(homeListItemsThisWeekIcon);
    homeListItemsThisWeek.appendChild(homeListItemsThisWeekText);
    homeListItems.appendChild(homeListItemsThisWeek);

    const homeListItemsImportant = document.createElement("li");
    homeListItemsImportant.classList.add("sidebar-item");
    const homeListItemsImportantText = document.createElement("div");
    homeListItemsImportantText.classList.add("sidebar-item-text");
    homeListItemsImportantText.textContent = "Important";
    const homeListItemsImportantIcon = document.createElement("img");
    homeListItemsImportantIcon.classList.add("sidebar-item-icon");
    homeListItemsImportantIcon.src = checkmarkIcon;

    homeListItemsImportant.appendChild(homeListItemsImportantIcon);
    homeListItemsImportant.appendChild(homeListItemsImportantText);
    homeListItems.appendChild(homeListItemsImportant);

    // Projects List
    const projectsList = document.createElement("div");
    const projectsListTitle = document.createElement("div");
    projectsListTitle.textContent = "Projects";
    projectsListTitle.classList.add("sidebar-title");

    const projectsListItems = document.createElement("ul");

    const projectsListItemsAddProject = document.createElement("li");
    projectsListItemsAddProject.classList.add("sidebar-item");
    const projectsListItemsAddProjectText = document.createElement("div");
    projectsListItemsAddProjectText.classList.add("sidebar-item-text");
    projectsListItemsAddProjectText.textContent = "Add Project";
    const projectsListItemsAddProjectIcon = document.createElement("img");
    projectsListItemsAddProjectIcon.classList.add("sidebar-item-icon");
    projectsListItemsAddProjectIcon.src = checkmarkIcon;

    projectsListItemsAddProject.appendChild(projectsListItemsAddProjectIcon);
    projectsListItemsAddProject.appendChild(projectsListItemsAddProjectText);
    projectsListItems.appendChild(projectsListItemsAddProject);

    homeList.appendChild(homeListTitle);
    homeList.appendChild(homeListItems);

    projectsList.appendChild(projectsListTitle);
    projectsList.appendChild(projectsListItems);

    sidebar.appendChild(homeList);
    sidebar.appendChild(projectsList);

    // FOOTER
    const footer = document.querySelector(".footer");
    footer.innerHTML =
        'Created by &nbsp;<a href="https://github.com/leo-tsant" target="_blank">Leonidas Tsantarliotis</a>&nbsp;for&nbsp;<a href="https://www.theodinproject.com/dashboard" target="_blank">The Odin Project</a>';

    container.appendChild(footer);
};

export default loadPage;
