/**
 * Question 2 - Fonctions anonymes et fléchées
 * Créer des fonctions fléchées pour addition et multiplication
 */

// TODO: Créer une fonction fléchée add(a, b) qui retourne a + b
const add = undefined;

// TODO: Créer une fonction fléchée mul(a, b) qui retourne a * b
const mul = undefined;

/**
 * Initialise les événements de la page
 */
function initialiser() {

    const addButton = document.querySelector("#a");
    const multButton = document.querySelector('#m');
    const outText = document.querySelector('#res');

    addButton.addEventListener("click", (event2) => {
        const resultatAdd = add(3, 4);
        outText.textContent = resultatAdd;
    });

    multButton.addEventListener("click", (event2) => {
        const resultatMult = mul(3, 4);
        outText.textContent = resultatMult;
    });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { add, mul, initialiser };
