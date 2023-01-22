import { app, db, collection, getDocs, Timestamp, addDoc, query, where, onSnapshot} from './firebase.js';


window.addEventListener('load', () => {
    const form = document.querySelector("#new-ingredient-form");
    const input = document.querySelector("#new-ingredient");
    const list = document.querySelector("#ingredient-list");
    const getRecipesButton = document.querySelector("#get-recipes");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const ingredient = input.value;

        if (!ingredient) {
            alert("Please input an ingredient.");
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

        const ingredientEdit = document.createElement("button");
        ingredientEdit.classList.add("edit");
        ingredientEdit.innerHTML = "Edit";

        const ingredientDelete = document.createElement("button");
        ingredientDelete.classList.add("delete");
        ingredientDelete.innerHTML = "Delete";

        ingredientActions.appendChild(ingredientEdit);
        ingredientActions.appendChild(ingredientDelete);

        ingredientElement.appendChild(ingredientActions);

        list.appendChild(ingredientElement);

        input.value = "";

        ingredientEdit.addEventListener('click', (e) => {
			if (ingredientEdit.innerText.toLowerCase() == "edit") {
				ingredientEdit.innerText = "Save";
				ingredientInput.removeAttribute("readonly");
				ingredientInput.focus();
			} else {
				ingredientEdit.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

        ingredientDelete.addEventListener('click', (e) => {
            const numberOfIngredients = document.querySelectorAll('.ingredient').length;
            if (numberOfIngredients <= 1){
                return;
            }
            list.removeChild(ingredientElement);
        }) 
    })

    getRecipesButton.addEventListener('click', (e) => {
        var submittedIngredients = document.getElementsByClassName("text");
        var ingredientsArray = [];
        for (var i = 0; i < submittedIngredients.length; i++) {
            ingredientsArray.push(submittedIngredients.item(i).value);
        }
        const recipeList = getRecipes(db);
        console.log(recipeList);
        console.log(ingredientsArray);

        const colRef = collection(db, 'recipes');

        const q = query(colRef, where("tags", "array-contains", ingredientsArray[0]))

        onSnapshot(q, (snapshot) => {
            let recipes = [];
            snapshot.docs.forEach((doc) => {
                recipes.push({ ...doc.data(), id: doc.id})
            })
            console.log(recipes);
        })
    });
})

async function getRecipes(db) {
    const recipesCol = collection(db, 'recipes');
    const recipesSnapshot = await getDocs(recipesCol);
    const recipeList = recipesSnapshot.docs.map(doc => doc.data());
    return recipeList;
}