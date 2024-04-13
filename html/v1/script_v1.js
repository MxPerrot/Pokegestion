// Sélectionner le tbody dans pokemon_v1.html qui a comme id pokemon-list
Pokemon.import_pokemon();
const tbody = document.querySelector('#pokemon-list');

// Créer une fonction pour afficher les Pokémon dans le tbody
function afficherPokemon() {
    // Récupérer tous les Pokémon de la classe Pokemon
    const tousLesPokemon = Pokemon.all_pokemon;

    // Parcourir chaque Pokémon et les ajouter au tbody
    tousLesPokemon.forEach(pokemon => {
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
    });
}

// Appeler la fonction pour afficher les Pokémon
afficherPokemon();