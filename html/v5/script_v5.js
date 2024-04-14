/******************************************************************************
*                       Variables globales & Constantes                       * 
******************************************************************************/
 
const range = 25; // Nombre de Pokémon à afficher par page

const detailsAttackDiv = document.querySelector('#attack-details');
const detailsDiv = document.querySelector('#pokemon-details');

const pokemonImageDiv = document.querySelector('#pokemon-image-popup');
const pageDiv = document.querySelectorAll('.page');

const dialogDetails = document.getElementById('pokemon-details');
const dialogAttackDetails = document.getElementById('attack-details');

const tbody = document.querySelector('#pokemon-list');
const allPokemon = Pokemon.getPokemons();
const allAttacks = Pokemon.getAttacks();

const filterDiv = document.querySelector('#filter-container');

// Fonction pour mettre à jour les options de filtrage
const generationFilter = filterDiv.querySelector('#generation-filter');
const typeFilter = filterDiv.querySelector('#type-filter');
const nameFilter = filterDiv.querySelector('#name-filter');

// Variables pour stocker les options de filtrage
let filters = {
    generation: null,
    type: null,
    name: null
};

let filteredPokemon = allPokemon;

/******************************************************************************
*                                  Fonctions                                  *
******************************************************************************/


// Créer une fonction pour afficher les Pokémon dans le tbody
function afficherPokemon(offset, filters) {

    // Vider le tbody avant d'ajouter les nouveaux Pokémon
    tbody.innerHTML = '';

    // Filtrer les Pokémon en fonction des options de filtrage
    const filteredPokemon = allPokemon.filter(pokemon => {
        if (filters.generation && pokemon.generation_number != filters.generation) {
            return false;
        }
        if (filters.type && !pokemon.getType().includes(filters.type)) {
            return false;
        }
        if (filters.name && !pokemon.getPokemonName().toLowerCase().includes(filters.name.toLowerCase())) {
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
    const currentPage = Math.floor(offset / range) + 1;
    const totalPages = Math.ceil(filteredPokemon.length / range);

    // Afficher Page x/total 
    for (let i = 0; i < pageDiv.length; i++) {
        pageDiv[i].textContent = `Page ${currentPage} / ${totalPages}`;
    }
}

function afficherDetails(pokemon) {
    /**
     * Affiche les détails du Pokémon dans une popup
     */

    let imageID = pokemon.getPokemonId().toString().padStart(3, '0');

    // Générer le HTML pour les détails du Pokémon c'est des array pas des map
    const detailsHTML = `
    <div id="details-header">
        <div id="details-header-left">
            <h2 id="pokemon-name">${pokemon.getPokemonName()}</h2>
            <p>${pokemon.getType()}</p>
        </div>
        <img id="pokemon-sprite" src="../webp/thumbnails/${imageID}.webp" alt="">
    </div>
    <div id="pokemon-attacks">
        <div id="left-attacks">   
            <h3>Charged Attacks</h3>
            <ul>
                ${pokemon.getChargedMoves().map(attack => `<li>${attack}</li>`).join('')} 
            </ul>
        </div>
        <div id="right-attacks">   
            <h3>Fast Attacks</h3>
            <ul>
                ${pokemon.getFastMoves().map(attack => `<li>${attack}</li>`).join('')}
            </ul>
        </div>
    </div>
    `;

    // for every li in the uls, add an event listener to show the attack details
    // const lis = detailsDiv.querySelectorAll('li');
    // for (let i = 0; i < lis.length; i++) {
    //     console.log(allAttacks[lis[i].id]);
    //     lis[i].addEventListener('click', () => afficherDetailsAttaque());
    // }

    detailsDiv.innerHTML = detailsHTML;
    dialogDetails.showModal();
    detailsDiv.addEventListener('click', () => dialogDetails.close());
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

function updateFilters() {
    filters.generation = generationFilter.value;
    filters.type = typeFilter.value;
    filters.name = nameFilter.value;
    offset = 0;
    afficherPokemon(offset, filters);
}

function afficherPokemonSuivants() {
    /**
     * Affiche les <range> Pokémon suivants
     */
    
    if (offset + range < allPokemon.length) {
        offset += range;
        afficherPokemon(offset, filters);
    }
}

function afficherPokemonPrecedents() {
    /**
     * Affiche les <range> Pokémon précédents
     */

    offset = Math.max(offset-range, 1);
    afficherPokemon(offset, filters);
}


// Function to sort the pokemon based on the chosen column
function sortPokemon(column, pokemonList) {
    if (column === Pokemon.sortColumn) {
        Pokemon.sortOrder *= -1;
    } else {
        Pokemon.sortColumn = column;
        Pokemon.sortOrder = 1;
    }
    pokemonList.sort((a, b) => {
        if (column === 'id') {
            return a.pokemon_id - b.pokemon_id;
        } else if (column === 'name') {
            return a.pokemon_name.localeCompare(b.pokemon_name);
        } else if (column === 'generation') {
            return a.generation_number - b.generation_number;
        } else if (column === 'type') {
            return a.type[0].localeCompare(b.type[0]);
        } else if (column === 'stamina') {
            return a.base_stamina - b.base_stamina;
        } else if (column === 'attack') {
            return a.base_attack - b.base_attack;
        } else if (column === 'defense') {
            return a.base_defense - b.base_defense;
        }
    });
    if (Pokemon.sortOrder === -1) {
        pokemonList.reverse();
    }
    return pokemonList;
}



/******************************************************************************
*                                  Execution                                  * 
******************************************************************************/

Pokemon.import_pokemon(); // Générer les Pokémon
afficherPokemon(offset, filters); // Afficher les Pokémon dans le tableau

// Lier les boutons "Suivant" et "Précédent" aux fonctions correspondantes
const boutonSuivant = document.querySelectorAll('.bouton-suivant');
const boutonPrecedent = document.querySelectorAll('.bouton-precedent');

for (let i = 0; i < boutonPrecedent.length; i++) {
    boutonPrecedent[i].addEventListener('click', afficherPokemonPrecedents);
}
for (let i = 0; i < boutonSuivant.length; i++) {
    boutonSuivant[i].addEventListener('click', afficherPokemonSuivants);
}

// Ajouter des écouteurs d'événements aux boutons
addFilterOptions();

filterDiv.addEventListener('change', updateFilters);

// Add event listeners to table headers for sorting
const tableHeaders = document.querySelectorAll('#pokemon-list-head th');

tableHeaders.forEach(header => {
    header.style.fontWeight = 'normal'
    header.addEventListener('click', () => {
        const column = header.textContent.toLowerCase();
        // mettre le nom de la colonne en gras
        tableHeaders.forEach(header => header.style.fontWeight = 'normal');
        header.style.fontWeight = 'bold';
        console.log(column);
        filteredPokemon = sortPokemon(column, filteredPokemon);
        afficherPokemon(offset, filters);
    });
});

console.log("done")