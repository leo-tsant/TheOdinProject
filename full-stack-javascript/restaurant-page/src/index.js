import "./styles/main.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";

import "./components/load-page.js";

import loadPage from "./components/load-page.js";
import home from "./components/home.js";
import menu from "./components/menu.js";
import contact from "./components/contact.js";

loadPage();

const content = document.querySelector(".content");

const homeTab = document.getElementById("home");

const menuTab = document.querySelector("#menu");
const contactTab = document.querySelector("#contact");

let firstLoad = true;

function handleTabClick(activeTab, inactiveTabs, callback) {
    content.innerHTML = "";
    activeTab.classList.add("active");
    inactiveTabs.forEach((tab) => tab.classList.remove("active"));
    callback();
}

homeTab.addEventListener("click", () => handleTabClick(homeTab, [menuTab, contactTab], home));
menuTab.addEventListener("click", () => handleTabClick(menuTab, [homeTab, contactTab], menu));
contactTab.addEventListener("click", () => handleTabClick(contactTab, [homeTab, menuTab], contact));

if (firstLoad) {
    handleTabClick(homeTab, [menuTab, contactTab], home);
    firstLoad = false;
}
