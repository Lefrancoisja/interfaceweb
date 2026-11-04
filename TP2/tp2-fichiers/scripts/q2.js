/**
 * Question 2 - Fonctions anonymes et fléchées
 * Créer des fonctions fléchées pour addition et multiplication
 */

const add = (a, b) => a + b;

const mul = (a, b) => a * b;

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

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

export { add, mul, initialiser };