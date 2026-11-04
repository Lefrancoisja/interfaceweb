/**
 * Question 1 - Convertisseur de température
 * Convertir des degrés Celsius en Fahrenheit
 */

// TODO: Déclarez des variables (nombre, string)

/**
 * Convertit une température de Celsius en Fahrenheit
 * @param {number} celsius - La température en degrés Celsius
 * @returns {number} fahrenheit - La température en degrés Fahrenheit
 */
function convertirCelsiusVersfahrenheit(celsius) {
    // TODO: Retourner le résultat de la conversion en utilisant l'expression c*9/5+32
    let farhaneit = celsius * 9 / 5 + 32;
    return farhaneit;
}

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#c, #go, #out)
    const goBouton = document.querySelector("#go");
    const outText = document.querySelector('#out');
    const celsius = document.querySelector('#c');

    goBouton.addEventListener("click", (event1) => {
        const entree = Number(celsius.value);
        const resultat = convertirCelsiusVersfahrenheit(entree);
        outText.textContent = entree + "°C = " + resultat + "°F";

        if (celsius.value.trim() === "") {
            outText.textContent = "Veuillez entrer une valeur";
        }
    });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { convertirCelsiusVersfahrenheit, initialiser };
