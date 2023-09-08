import pizzaIcon from "../images/pizza.svg";

function loadPage() {
    // Create the header element
    const header = document.createElement("div");
    header.className = "header";

    const headerText = document.createElement("div");
    headerText.className = "header-text";

    // Create the title element
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "Alfredo's Pizza";

    // Create the img element
    const img = document.createElement("img");
    img.className = "icon";
    img.src = pizzaIcon;

    // Append img to the header
    headerText.appendChild(img);

    // Create the tabs element
    const tabs = document.createElement("div");
    tabs.className = "tabs";

    // Create the Home tab
    const homeTab = document.createElement("div");
    homeTab.className = "tab";
    homeTab.id = "home";
    homeTab.textContent = "Home";

    // Create the Menu tab
    const menuTab = document.createElement("div");
    menuTab.className = "tab";
    menuTab.id = "menu";
    menuTab.textContent = "Menu";

    // Create the Contact tab
    const contactTab = document.createElement("div");
    contactTab.className = "tab";
    contactTab.id = "contact";
    contactTab.textContent = "Contact";

    // Append tabs to the header
    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);

    headerText.appendChild(title);
    headerText.appendChild(tabs);

    header.appendChild(headerText);

    // Create the content element
    const content = document.createElement("div");
    content.className = "content";

    // Create the footer element
    const footer = document.createElement("div");
    footer.className = "footer";
    footer.innerHTML =
        'Created by &nbsp;<a href="https://github.com/leo-tsant" target="_blank">Leonidas Tsantarliotis</a>&nbsp;for&nbsp;<a href="https://www.theodinproject.com/dashboard" target="_blank">The Odin Project</a>';

    const container = document.getElementById("container");
    // Append header, content, and footer to container
    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);
}

export default loadPage;
