/**
 * Question 5 - Données numériques et gestion du temps
 * Compteur avec setInterval et clearInterval
 */

// TODO: Déclarez les variables nécessaires (éléments DOM, id de l'interval, valeur du compteur)

/**
 * Initialise les événements de la page
 */
function initialiser() {
    
    const numero = document.querySelector("#n");
    const start = document.querySelector("#start");
    const stop = document.querySelector("#stop");
    const double = document.querySelector("#double");

    let chiffre = 0;
    let intervale = null;
    start.addEventListener("click", (event) => {
        if (intervale === null) {
            intervale = setInterval(() => {
                chiffre++;
                numero.textContent = chiffre;
            }, 1000);
        }
    });

    stop.addEventListener("click", (event) => {
        clearInterval(intervale);
        intervale = null;
    });

    double.addEventListener("click", (event) => {
        chiffre = chiffre * 2;
        numero.textContent = chiffre;
    });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
