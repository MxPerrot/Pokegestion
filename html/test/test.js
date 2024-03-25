Pokemon.import_pokemon();

function getPokemonsByType(typeName) {
    let pokemons = [];
    for(const key in Pokemon.all_pokemon) {
        if(Pokemon.all_pokemon[key].getType().includes(typeName)) {
            pokemons.push(Pokemon.all_pokemon[key]);
        }
    }
    return pokemons;
}

function getPokemonsByAttack(attackName)    {
    let pokemons = [];
    for(const key in Pokemon.all_pokemon) {
        if(Pokemon.all_pokemon[key].getAllMoves().includes(attackName)) {
            pokemons.push(Pokemon.all_pokemon[key]);
        }
    }
    return pokemons;
}

function getAttacksByType(typeName) {
    let attacks = [];
    for(const key in Attack.all_attacks) {
        if(Attack.all_attacks[key].getType == typeName) {
            attacks.push(Attack.all_attacks[key]);
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
            pokemons.push(Pokemon.all_pokemon[key]);
        }
    }
    return pokemons;
}

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

// OBSOLETE
// Print the options of the selector for the test.html.old

// function printOptionsSelectorType(selectorId) {
//     let string = "";
//     for(const key in Pokemon.getTypes()) {
//         string += `<option value="${Pokemon.getTypes()[key].getType()}">${Pokemon.getTypes()[key].getType()}</option>`;
//     }
//     document.getElementById(selectorId).innerHTML = string;
// }

// function printOptionsSelectorAttack(selectorId) {
//     let string = "";
//     for(const key in Pokemon.getAttacks()) {
//         string += `<option value="${Pokemon.getAttacks()[key].getName()}">${Pokemon.getAttacks()[key].getName()}</option>`;
//     }
//     document.getElementById(selectorId).innerHTML = string;
// }

// function printOptionsSelectorPokemon(selectorId) {
//     let string = "";
//     for(const key in Pokemon.all_pokemon) {
//         string += `<option value="${Pokemon.all_pokemon[key].getPokemonName()}">${Pokemon.all_pokemon[key].getPokemonName()}</option>`;
//     }
//     document.getElementById(selectorId).innerHTML = string;
// }

// // initialize the selectors
// printOptionsSelectorType("test1-input-select");
// printOptionsSelectorAttack("test2-input-select");
// printOptionsSelectorType("test3-input-select");
// printOptionsSelectorAttack("test6-input-select");
// printOptionsSelectorPokemon("test7-input-select");


function test1() {
    let selectedType = document.getElementById("input-text").value;
    if (selectedType != undefined && selectedType != null && selectedType != "") {
        result = getPokemonsByType(selectedType);
        console.table(result);
    } else {
        console.log("ERROR: No type selected.");
    }
}

function test2() {
    let selectedAttack = document.getElementById("input-text").value;
    if (selectedAttack != undefined && selectedAttack != null && selectedAttack != "") {
        result = getPokemonsByAttack(selectedAttack);
        console.table(result);
    } else {
        console.log("ERROR: No attack selected.");
    }
}

function test3() {
    let selectedType = document.getElementById("input-text").value;
    if (selectedType != undefined && selectedType != null && selectedType != "") {
        result = getAttacksByType(selectedType);
        console.table(result);
    } else {
        console.log("ERROR: No type selected.");
    }
}

function test4() {
    sortPokemonByName();
    console.table(Pokemon.all_pokemon);
}

function test5() {
    sortPokemonByStamina();
    console.table(Pokemon.all_pokemon);
}

function test6() {
    let selectedAttack = document.getElementById("input-text").value;
    if (selectedAttack != undefined && selectedAttack != null && selectedAttack != "") {
        result = getWeakestEnemies(selectedAttack);
        console.table(result);
    } else {
        console.log("ERROR: No attack selected.");
    }
}

function test7() {
    let selectedPokemon = document.getElementById("input-text").value;
    if (selectedPokemon != undefined && selectedPokemon != null && selectedPokemon != "") {
        // check if pokemon exists
            result = getBestAttackTypesForEnemy(selectedPokemon);
            console.table(result);
    } else {
        console.log("ERROR: No pokemon selected.");
    }
}