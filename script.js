document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".serch-box input");
    const searchButton = document.querySelector(".serch-box button");
    const recipes = document.querySelectorAll(".recipe-card");

    function filterRecipes() {
        const searchText = searchInput.value.toLowerCase();
        recipes.forEach(recipe => {
            const recipeName = recipe.querySelector("h2").textContent.toLowerCase();
            if (recipeName.includes(searchText)) {
                recipe.style.display = "block";
            } else {
                recipe.style.display = "none";
            }
        });
    }

    searchButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents form submission
        filterRecipes();
    });

    searchInput.addEventListener("keyup", function () {
        filterRecipes();
    });
});
