import burgerIcon from "../images/burger.svg";
import donutIcon from "../images/donut.svg";
import sodaIcon from "../images/soda.svg";

function home() {
    const content = document.querySelector(".content");

    const home = document.createElement("div");
    home.className = "home";

    content.appendChild(home);

    // Card 1
    const card1 = document.createElement("div");
    card1.className = "card";

    const card1Text = document.createElement("div");
    card1Text.className = "card-text";
    card1Text.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae augue. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae augue.";

    const card1Icon = document.createElement("img");
    card1Icon.className = "home-icon";
    card1Icon.src = burgerIcon;

    // Card 2
    const card2 = document.createElement("div");
    card2.className = "card";

    const card2Text = document.createElement("div");
    card2Text.className = "card-text";
    card2Text.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae augue. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae augue.";

    const card2Icon = document.createElement("img");
    card2Icon.className = "home-icon";
    card2Icon.src = donutIcon;

    // Card 3
    const card3 = document.createElement("div");
    card3.className = "card";

    const card3Text = document.createElement("div");
    card3Text.className = "card-text";
    card3Text.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae augue. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae augue.";

    const card3Icon = document.createElement("img");
    card3Icon.className = "home-icon";
    card3Icon.src = sodaIcon;

    card1.appendChild(card1Text);
    card1.appendChild(card1Icon);

    card2.appendChild(card2Text);
    card2.appendChild(card2Icon);

    card3.appendChild(card3Text);
    card3.appendChild(card3Icon);

    home.appendChild(card1);
    home.appendChild(card2);
    home.appendChild(card3);
}

export default home;
