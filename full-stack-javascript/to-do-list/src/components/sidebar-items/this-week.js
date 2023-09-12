const thisWeek = () => {
    const content = document.querySelector(".content");

    const header = document.createElement("div");
    header.classList.add("content-header");
    header.textContent = "This Week";

    content.appendChild(header);
};

export default thisWeek;
