const container = document.getElementById("container");

function removeTransition(e) {
  if (e.type !== "mouseleave") return;
  setTimeout(() => {
    this.classList.remove("hovered");
  }, 300);
}

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.className = "grid-item";

    div.addEventListener("mouseover", function (e) {
      this.classList.add("hovered");
    });

    div.addEventListener("mouseleave", removeTransition);

    container.appendChild(div);
  }
}
