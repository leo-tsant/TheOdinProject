function menu() {
    const content = document.querySelector(".content");

    const menu = document.createElement("div");
    menu.className = "menu";

    // Pizza 1
    const pizza1 = document.createElement("div");
    pizza1.className = "recipe";

    const pizza1Title = document.createElement("div");
    pizza1Title.className = "pizza-title";
    pizza1Title.textContent = "Margherita Pizza";

    const pizza1Ingredients = document.createElement("div");
    pizza1Ingredients.className = "pizza-ingredients";
    pizza1Ingredients.textContent = "Classic tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.";

    pizza1.appendChild(pizza1Title);
    pizza1.appendChild(pizza1Ingredients);

    // Pizza 2
    const pizza2 = document.createElement("div");
    pizza2.className = "recipe";

    const pizza2Title = document.createElement("div");
    pizza2Title.className = "pizza-title";
    pizza2Title.textContent = "Pepperoni Pizza";

    const pizza2Ingredients = document.createElement("div");
    pizza2Ingredients.className = "pizza-ingredients";
    pizza2Ingredients.textContent = "Tomato sauce, mozzarella cheese, and generous slices of pepperoni.";

    pizza2.appendChild(pizza2Title);
    pizza2.appendChild(pizza2Ingredients);

    // Pizza 3
    const pizza3 = document.createElement("div");
    pizza3.className = "recipe";

    const pizza3Title = document.createElement("div");
    pizza3Title.className = "pizza-title";
    pizza3Title.textContent = "Meat Lover's Pizza";

    const pizza3Ingredients = document.createElement("div");
    pizza3Ingredients.className = "pizza-ingredients";
    pizza3Ingredients.textContent = "Tomato sauce, mozzarella cheese, pepperoni, Italian sausage, bacon, and ground beef.";

    pizza3.appendChild(pizza3Title);
    pizza3.appendChild(pizza3Ingredients);

    // Pizza 4
    const pizza4 = document.createElement("div");
    pizza4.className = "recipe";

    const pizza4Title = document.createElement("div");
    pizza4Title.className = "pizza-title";
    pizza4Title.textContent = "BBQ Chicken Pizza";

    const pizza4Ingredients = document.createElement("div");
    pizza4Ingredients.className = "pizza-ingredients";
    pizza4Ingredients.textContent = "BBQ sauce, mozzarella cheese, grilled chicken, red onions, and cilantro.";

    pizza4.appendChild(pizza4Title);
    pizza4.appendChild(pizza4Ingredients);

    // Pizza 5
    const pizza5 = document.createElement("div");
    pizza5.className = "recipe";

    const pizza5Title = document.createElement("div");
    pizza5Title.className = "pizza-title";
    pizza5Title.textContent = "Pesto Delight Pizza";

    const pizza5Ingredients = document.createElement("div");
    pizza5Ingredients.className = "pizza-ingredients";
    pizza5Ingredients.textContent = "Pesto sauce, mozzarella cheese, grilled chicken, sun-dried tomatoes, and pine nuts.";

    pizza5.appendChild(pizza5Title);
    pizza5.appendChild(pizza5Ingredients);

    content.appendChild(menu);
    menu.appendChild(pizza1);
    menu.appendChild(pizza2);
    menu.appendChild(pizza3);
    menu.appendChild(pizza4);
    menu.appendChild(pizza5);
}

export default menu;
