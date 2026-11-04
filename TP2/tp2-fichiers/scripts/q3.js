/**
 * Question 3 - Objets et tableaux
 * Manipuler des tableaux d'objets et afficher des listes filtrées
 */

const jeux = [
  { nom: "Azul", duree: 45 },
  { nom: "Catan", duree: 90 },
  { nom: "Agricola", duree: 120 },
  { nom: "Far Away", duree: 25 },
  { nom: "Flip 7", duree: 20 },
  { nom: "Ticket to ride", duree: 45 }
];

/**
 * Méthode générique pour afficher une liste de jeux dans un élément ul
 * @param {Array} listeJeux - La liste des jeux à afficher
 * @param {HTMLElement} elementUl - L'élément <ul> dans lequel ajouter les items
 */
function afficherJeux(listeJeux, elementUl) {

    listeJeux.forEach(jeu => {
        const item = document.createElement("li");
        item.textContent = `${jeu.nom} (${jeu.duree} min)`;
        elementUl.appendChild(item);
    });
}

/**
 * Initialise les listes de jeux
 */
function initialiser() {

    const listeCourt = document.querySelector("#liste-court");
    const listeLong = document.querySelector("#liste-long");

    const jeuxCourt = jeux.filter(jeu => jeu.duree < 60);

    const jeuxLong = jeux.filter(jeu => jeu.duree >= 60);

    afficherJeux(jeuxCourt, listeCourt);
    afficherJeux(jeuxLong, listeLong);
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { jeux, afficherJeux, initialiser };