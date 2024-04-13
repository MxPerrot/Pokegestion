// Sélectionner le tbody dans pokemon_v1.html qui a comme id pokemon-list
Pokemon.import_pokemon();
const tbody = document.querySelector('#pokemon-list');

// Sélectionner le div ayant l'id "page"
const pageDiv = document.querySelector('#page');

// Sélectionner le div ayant l'id "details"
const detailsDiv = document.querySelector('#pokemon-details');

const pokemonImageDiv = document.querySelector('#pokemon-image-popup');

// Sélectionner la zone de filtrage
const filterDiv = document.querySelector('#filter-container');

// Créer une fonction pour afficher les Pokémon dans le tbody
function afficherPokemon(offset, filters) {
    // Récupérer tous les Pokémon de la classe Pokemon
    const tousLesPokemon = Pokemon.all_pokemon;

    // Vider le tbody avant d'ajouter les nouveaux Pokémon
    tbody.innerHTML = '';

    // Filtrer les Pokémon en fonction des options de filtrage
    const filteredPokemon = tousLesPokemon.filter(pokemon => {
        if (filters.generation && pokemon.generation_number != filters.generation) {
            return false;
        }
        if (filters.type && !pokemon.type.includes(filters.type)) {
            return false;
        }
        if (filters.name && !pokemon.pokemon_name.toLowerCase().includes(filters.name.toLowerCase())) {
            return false;
        }
        return true;
    });

    // Calculer l'index de départ et de fin pour les Pokémon à afficher
    const startIndex = offset;
    const endIndex = offset + 25;

    // Parcourir chaque Pokémon dans la plage spécifiée et les ajouter au tbody
    for (let i = startIndex; i < endIndex; i++) {
        const pokemon = filteredPokemon[i];

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

            newRow.querySelector('img').addEventListener('mouseover', () => {
                pokemonImageDiv.innerHTML = `<img src="../webp/images/${imageID}.webp" alt="${pokemon.pokemon_name}">`;
                pokemonImageDiv.style.display = 'block';
                setTimeout(() => pokemonImageDiv.style.display = 'none', 2000);
                pokemonImageDiv.addEventListener('mouseout', () => pokemonImageDiv.style.display = 'none');
            });
            newRow.querySelector('img').addEventListener('mouseout', () => {
                pokemonImageDiv.style.display = 'none'
            });

            // Ajouter un écouteur d'événement pour afficher les détails du Pokémon au clic
            newRow.addEventListener('click', () => afficherDetails(pokemon));

            // Ajouter la nouvelle ligne au tbody
            tbody.appendChild(newRow);
        }
    }

    // Calculer le numéro de la page courante et le nombre total de pages
    const currentPage = Math.floor(offset / 25) + 1;
    const totalPages = Math.ceil(filteredPokemon.length / 25);

    // Afficher le numéro de la page courante et le nombre total de pages dans le div "page"
    pageDiv.textContent = `Page ${currentPage} / ${totalPages}`;
}

// Fonction pour afficher les détails du Pokémon sélectionné
function afficherDetails(pokemon) {
    // Générer le HTML pour les détails du Pokémon c'est des array pas des map
    const detailsHTML = `
        <h2>${pokemon.pokemon_name}</h2>
        <p>Type: ${pokemon.type}</p>
        <h3>Charged Attacks:</h3>
        <ul>
            ${pokemon.charged_moves.map(attack => `<li>${attack}</li>`).join('')}
        </ul>
        <h3>Fast Attacks:</h3>
        <ul>
            ${pokemon.fast_moves.map(attack => `<li>${attack}</li>`).join('')}
        </ul>
    `;
    console.log(pokemon, detailsHTML);
    // Afficher les détails dans le div "details"
    detailsDiv.innerHTML = detailsHTML;
    // afficher la popup
    detailsDiv.style.display = 'block';
    // Ajouter un écouteur sur le bouton dans le detailsDiv pour le fermer
    detailsDiv.addEventListener('click', () => detailsDiv.style.display = 'none');
}

// Variables pour suivre l'offset actuel
let offset = 0;

// Fonction pour rajouter les différentes options de filtrage
function addFilterOptions() {
    // Récupérer toutes les générations et les types de Pokémon
    const generations = Pokemon.all_pokemon.map(pokemon => pokemon.generation_number).filter(generation => generation);
    const types = Pokemon.all_pokemon.map(pokemon => pokemon.type).flat();

    const uniqueGenerations = [...new Set(generations)];
    const uniqueTypes = [...new Set(types)];

    // Créer des options pour chaque génération et type en mettant une option all qui rend null
    const generationOptions = ['<option value="">All</option>', ...uniqueGenerations.map(generation => `<option value="${generation}">${generation}</option>`)];
    const typeOptions = ['<option value="">All</option>', ...uniqueTypes.map(type => `<option value="${type}">${type}</option>`)];

    // récuper le select de la génération et ajouter les options
    filterDiv.querySelector('#generation-filter').innerHTML = generationOptions.join('');
    // récuper le select du type et ajouter les options
    filterDiv.querySelector('#type-filter').innerHTML = typeOptions.join('');
}

addFilterOptions();

// Variables pour stocker les options de filtrage
let filters = {
    generation: null,
    type: null,
    name: null
};

// Fonction pour mettre à jour les options de filtrage
const generationFilter = filterDiv.querySelector('#generation-filter');
const typeFilter = filterDiv.querySelector('#type-filter');
const nameFilter = filterDiv.querySelector('#name-filter');

function updateFilters() {
    filters.generation = generationFilter.value;
    filters.type = typeFilter.value;
    filters.name = nameFilter.value;
    offset = 0;
    afficherPokemon(offset, filters);
}

filterDiv.addEventListener('change', updateFilters);

// Fonction pour afficher les 25 Pokémon suivants
function afficherPokemonSuivants() {
    offset += 25;
    afficherPokemon(offset, filters);
}

// Fonction pour afficher les 25 Pokémon précédents
function afficherPokemonPrecedents() {
    offset -= 25;
    if (offset < 0) {
        offset = 0;
    }
    afficherPokemon(offset, filters);
}

// Appeler la fonction pour afficher les Pokémon initiaux
afficherPokemon(offset, filters);

// Sélectionner les boutons pour afficher les Pokémon suivants et précédents
const boutonSuivant = document.querySelector('#bouton-suivant');
const boutonPrecedent = document.querySelector('#bouton-precedent');

// Ajouter des écouteurs d'événements aux boutons
boutonSuivant.addEventListener('click', afficherPokemonSuivants);
boutonPrecedent.addEventListener('click', afficherPokemonPrecedents);
