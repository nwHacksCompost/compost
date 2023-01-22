window.addEventListener('load', () => {
    const form = document.querySelector("#new-ingredient-form");
    const input = document.querySelector("#new-ingredient");
    const list = document.querySelector("#ingredient-list");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const ingredient = input.value;

        if (!ingredient) {
            alert("");
            return;
        } 

        const ingredientElement = document.createElement("div");
        ingredientElement.classList.add('ingredient');

        const ingredientContentElement = document.createElement("div");
        ingredientContentElement.classList.add("content");

        ingredientElement.appendChild(ingredientContentElement);


        const ingredientInput = document.createElement("input");
        ingredientInput.classList.add("text");
        ingredientInput.type = "text";
        ingredientInput.value = ingredient;
        ingredientInput.setAttribute("readonly", "readonly");

        ingredientContentElement.appendChild(ingredientInput);

        const ingredientActions = document.createElement("div");
        ingredientInput.classList.add("actions");

        const ingredientDelete = document.createElement("button");
        ingredientDelete.classList.add("delete");
        ingredientDelete.innerHTML = "Delete";

        ingredientActions.appendChild(ingredientDelete);

        ingredientElement.appendChild(ingredientActions);

        list.appendChild(ingredientElement);

        input.value = "";

        ingredientDelete.addEventListener('click', (e) => {
            list.removeChild(ingredientElement);
        }) 
    })
})