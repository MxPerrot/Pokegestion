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

function getWeakestEnemies(attack){
    let pokemons = [];
    let attackClass;
    for(const key in Attack.all_attacks) {
        if(Attack.all_attacks[key].getName() == attack) {
            attackClass = Attack.all_attacks[key];
        }
    }
    for(const key in Pokemon.all_pokemon) {
        let effectiveness = 1;
        for(const type in Pokemon.all_pokemon[key].getType()) {
            let typelist = Type.all_types[Pokemon.all_pokemon[key].getType()[type]];
            let currentEffectiveness = typelist.getTypeEffectiveness();
            console.log(attackClass.getType());
            effectiveness *= currentEffectiveness[attackClass.getType()];
        }
        if(effectiveness > 1) {
            pokemons += Pokemon.all_pokemon[key] + "\n";
        }
    }
    return pokemons;
}

// retourne la liste des type d'attaque les plus efficaces contre un pokemon donné (getWeakestEnemies mais pour les attaques)
function getBestAttackTypesForEnemy(name){
    let attacks = [];
    let pokemon;
    for(const key in Pokemon.all_pokemon) {
        if(Pokemon.all_pokemon[key].getPokemonName() == name) {
            pokemon = Pokemon.all_pokemon[key];
        }
    }
    for(const key in Attack.all_attacks) {
        let effectiveness = 1;
        for(const type in pokemon.getType()) {
            let typelist = Type.all_types[pokemon.getType()[type]];
            let currentEffectiveness = typelist.getTypeEffectiveness();
            effectiveness *= currentEffectiveness[Attack.all_attacks[key].getType()];
        }
        if(effectiveness > 1) {
            attacks += Attack.all_attacks[key] + "\n";
            console.log(attacks);
        }
    }
    return attacks;
}

document.getElementById("test1").innerText = getPokemonsByType("Grass");
document.getElementById("test2").innerText = getPokemonsByAttack("Thunder Shock");
document.getElementById("test3").innerText = getWeakestEnemies("Thunder Shock");
document.getElementById("test4").innerText = getBestAttackTypesForEnemy("Mewtwo");