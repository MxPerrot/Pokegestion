/******************************************************************************
*                       Variables globales & Constantes                       * 
******************************************************************************/

let offset = 1; 
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
            let imageID = pokemon.getPokemonId().toString().padStart(3, '0');
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

            // Ajouter un écouteur d'événement pour afficher l'image du Pokémon au survol
            newRow.querySelector('img').addEventListener('mouseover', () => {
                pokemonImageDiv.innerHTML = `<img src="../webp/images/${imageID}.webp" alt="${pokemon.pokemon_name}">`;
                pokemonImageDiv.style.display = 'block';
                pokemonImageDiv.addEventListener('mouseout', () => pokemonImageDiv.style.display = 'none');
            });

            // Ajouter un écouteur d'événement pour cacher l'image du Pokémon au survol
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
    const totalPages = Math.ceil(allPokemon.length / range);

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

function afficherDetailsAttaque(attack) {
    /**
     * TODO
     * Affiche les détails de l'attaque dans une popup
     */

    const detailsHTML = `
    <div id="attack-header">
        <h2 id="attack-name">${attack.getName()}</h2>
    </div>
    <ul>
        <li>ID : ${attack.getMoveId()}</li>
        <li>Power : ${attack.getPower()}</li>
        <li>Type : ${attack.getType()}</li>
        <li>Duration : ${attack.getDuration()}</li>
        <li>Energy delta : ${attack.getEnergyDelta()}</li>
        <li>Stamina loss scaler : ${attack.getStaminaLossScaler()}</li>
        <li>Critical chance : ${attack.getCriticalChance()}</li>
    </ul>`;

    detailsAttackDiv.innerHTML = detailsHTML;
    dialogAttackDetails.showModal();
    detailsAttackDiv.addEventListener('click', () => dialogAttackDetails.close());
    // NE FONCTIONNE PAS
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

// Lier les boutons "Suivant" et "Précédent" aux fonctions correspondantes
const boutonSuivant = document.querySelectorAll('.bouton-suivant');
const boutonPrecedent = document.querySelectorAll('.bouton-precedent');

for (let i = 0; i < boutonPrecedent.length; i++) {
    boutonPrecedent[i].addEventListener('click', afficherPokemonPrecedents);
}
for (let i = 0; i < boutonSuivant.length; i++) {
    boutonSuivant[i].addEventListener('click', afficherPokemonSuivants);
}