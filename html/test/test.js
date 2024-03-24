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

// Fonction getWeakestEnemies(attack) retournant la liste des pokémons pour lesquel l'attaque choisie est la plus efficace. Exemple de calcul d'efficacité pour une attaque Megahorn qui est associée au type Bug. Le Pokémon Bulbasaur est de type Grass et Poison. S'il est soumis à cette attaque Megahorn, l'efficacité de cette attaque sera de 1,6 pour son type Grass et de 0,625 pour son type Poison. L'efficacité global de cette attaque est de 1,6 x 0,625 soit 1.
function getWeakestEnemies(attack){
    let pokemons = [];
    for(const key in Pokemon.all_pokemon) {
        let effectiveness = 1;
        for(const type in Pokemon.all_pokemon[key].getType()) {
            let currentEffectiveness = Type.all_types[type].getTypeEffectiveness()[attack.getType()];
            effectiveness *= currentEffectiveness;
        }
        if(effectiveness > 1) {
            pokemons += Pokemon.all_pokemon[key] + "\n";
        }
    }
    return pokemons;
}

document.getElementById("test1").innerText = getPokemonsByType("Grass");
document.getElementById("test2").innerText = getPokemonsByAttack("Thunder Shock");
document.getElementById("test3").innerText = getWeakestEnemies("Thunder Shock");