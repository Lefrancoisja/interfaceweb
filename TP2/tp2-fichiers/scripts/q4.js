/**
 * Question 4 - Manipulation du DOM
 * Navigation, Insertion et Clonage
 */

/**
 * Initialise toutes les fonctionnalités de la page
 */
function initialiser() {
    // TODO: Étape 1 - Navigation entre les nœuds
    const out = document.querySelector("#out");
    const fruits = document.querySelector("#fruits");

    out.textContent = "Premier : " + fruits.firstElementChild.textContent + " | Dernier : " + fruits.lastElementChild.textContent + " | Après le 1er : " + fruits.children[0].nextElementSibling.textContent; 

    // TODO: Étape 2 - Création et insertion d'éléments
    const addHead = document.querySelector("#addHead");
    const addTail = document.querySelector("#addTail");
    const zone = document.querySelector("#zone");

    addHead.addEventListener("click", (event1) => {
        const paragraphe = document.createElement("p");
        paragraphe.textContent = "(tête)";
        zone.prepend(paragraphe);
    });

    addTail.addEventListener("click", (event1) => {
        const paragraphe = document.createElement("p");
        paragraphe.textContent = "(fin)";
        zone.append(paragraphe);
    });

    // TODO: Étape 3 - Clonage, remplacement et suppression
    const cloneur = document.querySelector("#cloner");
    const remplaceur = document.querySelector("#remplacer");
    const videur = document.querySelector("#vider");

    const carte = document.querySelector(".card");

    cloneur.addEventListener("click", (event1) => {
        const copieCard = carte.cloneNode(true);
        const i = document.querySelectorAll(".card").length;

        copieCard.textContent = "Card #" + (i + 1);

        carte.parentNode.append(copieCard);
    });

    remplaceur.addEventListener("click", (event1) => {
        const firstCarte = document.querySelector(".card");
        const remplacement = document.createElement("div");
        remplacement.setAttribute("class", "card");
        remplacement.textContent = "Remplacement";
        firstCarte.replaceWith(remplacement);
    });

    videur.addEventListener("click", (event1) => {
        const toutesCartes = document.querySelector("#cards");
        toutesCartes.remove();
    });
    
    // TODO: Étape 4 - Insertion à une position donnée
    const insererAvant2 = document.querySelector("#ins2");
    insererAvant2.addEventListener("click", (event1) => {
        const etape1_5 = document.createElement("li");
        etape1_5.textContent = "Étape 1.5";
        steps.children[1].before(etape1_5);
    }, {once:true});
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
