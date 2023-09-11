const important = () => {
    const content = document.querySelector(".content");

    const header = document.createElement("div");
    header.classList.add("content-header");
    header.textContent = "Important";

    content.appendChild(header);
};

export default important;
