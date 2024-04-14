/******************************************************************************
*                       Variables globales & Constantes                       * 
******************************************************************************/

let offset = 1; 
const range = 25; // Nombre de Pokémon à afficher par page
const pageDiv = document.querySelectorAll('.page');
const tbody = document.querySelector('#pokemon-list');
const allPokemon = Pokemon.getPokemons();

/******************************************************************************
*                                  Fonctions                                  *
******************************************************************************/

function afficherPokemon(offset) {
    /**
     * Fonction principale pour afficher les Pokémon dans le tableau
     */
    
    const startIndex = offset;
    const endIndex = offset + range;
    
    tbody.innerHTML = ''; // Vider le tbody avant d'ajouter les nouveaux Pokémon

    // Parcourir chaque Pokémon dans la plage spécifiée et les ajouter au tbody
    for (let i = startIndex; i < endIndex; i++) {
        const pokemon = allPokemon[i];

        // Vérifier si le Pokémon existe
        if (pokemon) {
            // Créer une nouvelle ligne de tableau pour chaque Pokémon
            const newRow = document.createElement('tr');
            let imageID = pokemon.pokemon_id.toString().padStart(3, '0');
            newRow.innerHTML = `
                <td>${pokemon.pokemon_id}</td>
                <td>${pokemon.pokemon_name}</td>
                <td>${pokemon.generation_number}</td>
                <td>${pokemon.type}</td>
                <td>${pokemon.base_stamina}</td>
                <td>${pokemon.base_attack}</td>
                <td>${pokemon.base_defense}</td>
                <td><img src="../webp/sprites/${imageID}MS.webp" alt="${pokemon.pokemon_name}"></td>
            `;

            // Ajouter la nouvelle ligne au tbody
            tbody.appendChild(newRow);
        }
    }

    // Calculer le numéro de la page courante et le nombre total de pages
    const currentPage = Math.floor(offset / range) + 1;
    const totalPages = Math.ceil(allPokemon.length / range);

    // Afficher Page x/total 
    for (let i = 0; i < pageDiv.length; i++) {
        pageDiv[i].textContent = `Page ${currentPage} / ${totalPages}`;
    }
}

function afficherPokemonSuivants() {
    /**
     * Affiche les <range> Pokémon suivants
     */
    
    if (offset + range < allPokemon.length) {
        offset += range;
        afficherPokemon(offset);
    }
}

function afficherPokemonPrecedents() {
    /**
     * Affiche les <range> Pokémon précédents
     */

    offset = Math.max(offset-range, 1);
    afficherPokemon(offset);
}


/******************************************************************************
*                                  Execution                                  * 
******************************************************************************/

Pokemon.import_pokemon(); // Générer les Pokémon
afficherPokemon(offset); // Afficher les Pokémon dans le tableau

// Lier les boutons portant les classes "Suivant" et "Précédent" aux fonctions correspondantes
const boutonPrecedent = document.querySelectorAll(".bouton-precedent");;
const boutonSuivant = document.querySelectorAll(".bouton-suivant");;

for (let i = 0; i < boutonPrecedent.length; i++) {
    boutonPrecedent[i].addEventListener('click', afficherPokemonPrecedents);
}
for (let i = 0; i < boutonSuivant.length; i++) {
    boutonSuivant[i].addEventListener('click', afficherPokemonSuivants);
}
