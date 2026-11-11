/**
 * Question 6 - Appels API avec fetch et async/await
 * Charger des recettes depuis une API externe
 */

/**
 * Charge les recettes depuis l'API
 */
async function chargerRecettes() {

    const textField = document.querySelector("#recettes");

    textField.textContent = "Chargement...";
    textField.classList.add("loading");
    try {
        const response = await fetch("https://dummyjson.com/recipes?limit=3");
        if (!response.ok) {
            throw new Error("Impossible de charger les recettes");
        }
        const data = await response.json();
        const recettes = data.recipes;
        textField.innerHTML = "";
        recettes.forEach((recette) => {
            const li = document.createElement("li");
            li.textContent = recette.name + " - " + recette.prepTimeMinutes + " min - " + recette.cuisine;
            textField.appendChild(li);
        });
        textField.classList.remove("loading");
    } catch (error) {
        textField.textContent = "Erreur réseau ou HTTP";
    }
    // TODO: Afficher un message de chargement dans #recettes

    // TODO: Utiliser try/catch pour gérer les erreurs

    // TODO: Utiliser await fetch() pour récupérer les données de l'API
    // URL: https://dummyjson.com/recipes?limit=3

    // TODO: Vérifier si la réponse est ok (response.ok)

    // TODO: Convertir la réponse en JSON avec await response.json()

    // TODO: Récupérer le tableau recipes depuis data.recipes

    // TODO: Vider la liste #recettes

    // TODO: Parcourir les recettes et créer un <li> pour chacune
    // Format: "nom - prepTimeMinutes min - cuisine"

    // TODO: En cas d'erreur, afficher un message d'erreur dans #recettes
}

/**
 * Initialise les événements de la page
 */
function initialiser() {

    const charger = document.querySelector("#charger");
    const recettes = document.querySelector("#recettes");

    charger.addEventListener("click", chargerRecettes);
    // TODO: Récupérer les éléments DOM (#charger, #recettes)

    // TODO: Au clic sur #charger, appeler chargerRecettes()
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { chargerRecettes, initialiser };
