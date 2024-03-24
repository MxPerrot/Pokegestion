Pokemon.import_pokemon();


function getPokemonsByType(typeName) {
    let pokemons = [];
    for(const key in Pokemon.all_pokemon) {
        if(Pokemon.all_pokemon[key].getType().includes(typeName)) {
            pokemons += Pokemon.all_pokemon[key] + "\n";
        }
    }
    return pokemons;
}

function getPokemonsByAttack(attackName)    {
    let pokemons = [];
    for(const key in Pokemon.all_pokemon) {
        if(Pokemon.all_pokemon[key].getAllMoves().includes(attackName)) {
            pokemons += Pokemon.all_pokemon[key] + "\n";
        }
    }
    return pokemons;
}

function getAttacksByType(typeName) {
    let attacks = [];
    for(const key in Attack.all_attacks) {
        if(Attack.all_attacks[key].getType == typeName) {
            attacks += Attack.all_attacks[key] + "\n";
        }
    }
    return attacks;
}

function sortPokemonByName(){
    Pokemon.all_pokemon.sort((a, b) => (a.getPokemonName() > b.getPokemonName()) ? 1 : -1);
}

function sortPokemonByStamina(){
    Pokemon.all_pokemon.sort((a, b) => (a.getBaseStamina() > b.getBaseStamina()) ? 1 : -1);
}

// cherche les pokemons dont le type de l'attaque est le plus efficace
getWeakestEnemies(attack){
    
}

document.getElementById("test1").innerText = getPokemonsByType("Grass");
document.getElementById("test2").innerText = getPokemonsByAttack("Thunder Shock");