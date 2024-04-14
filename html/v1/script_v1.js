/******************************************************************************
*                                  Fonctions                                  *
******************************************************************************/

function afficherPokemon() {
    /**
     * Fonction principale pour afficher les Pokémon dans le tableau
     */

    const tbody = document.querySelector('#pokemon-list'); // corps du tableau
    const allPokemon = Pokemon.getPokemons();

    // Parcourir chaque Pokémon et les ajouter au corps du tableau
    allPokemon.forEach(pokemon => {
        
        const newRow = document.createElement('tr'); // Créer une nouvelle ligne de tableau pour chaque Pokémon
        let imageID = pokemon.pokemon_id.toString().padStart(3, '0'); // Récupérer l'image du Pokémon

        // Ajouter les informations du Pokémon à la nouvelle ligne
        newRow.innerHTML = `
            <td>${pokemon.pokemon_id}</td>
            <td>${pokemon.pokemon_name}</td>
            <td>${pokemon.generation_number}</td>
            <td>${pokemon.type}</td> 
            <td>${pokemon.base_stamina}</td>
            <td>${pokemon.base_attack}</td>
            <td>${pokemon.base_defense}</td>
            <td><img class="details-image" src="../webp/sprites/${imageID}MS.webp" alt="${pokemon.pokemon_name}"></td>        `;

        // Ajouter la nouvelle ligne au corps du tableau
        tbody.appendChild(newRow);
    });
}


/******************************************************************************
*                                  Execution                                  *
******************************************************************************/

Pokemon.import_pokemon(); // Générer les Pokémon
afficherPokemon(); // Afficher les Pokémon dans le tableau