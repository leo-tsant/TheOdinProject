const today = () => {
    const content = document.querySelector(".content");

    const header = document.createElement("div");
    header.classList.add("content-header");
    header.textContent = "Today";

    content.appendChild(header);
};

export default today;
