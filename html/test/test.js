Pokemon.import_pokemon();

document.getElementById("test").innerText = Type.toString();
/*
function getPokemonsByType(typeName) {
    let pokemons = [];
    for (let i = 0; i < Pokemon.all_pokemon.length; i++) {
        // Cannot read properties of undefined (reading 'type')

        if (Pokemon.getPokemonType(i).includes(typeName)) {
            pokemons.push(Pokemon.all_pokemon[i]);
        }
    }
    return pokemons;
}

function retourneGetPokemonByType() {
    result1.innerText = getPokemonsByType("Grass");
    return 0;
}

function getPokemonsByAttack(attackName)    {
    let pokemons = [];
    for (let i = 0; i < Pokemon.all_pokemon.length; i++) {
        if (Pokemon.all_pokemon[i].charged_moves.includes(attackName) || Pokemon.all_pokemon[i].fast_moves.includes(attackName)) {
            pokemons.push(Pokemon.all_pokemon[i]);
        }
    }
    return pokemons;
}
*/