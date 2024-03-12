class Pokemon {
    constructor(pokemon_id, pokemon_name, generation_number, form, type, base_attack, base_defense, base_stamina, charged_moves, fast_moves, elite_charged_moves, elite_fast_moves) {
        let pokemon_id = pokemon_id //pokemon.js
        let pokemon_name = pokemon_name //pokemon.js
        let generation_number = generation_number //generation.js
        let form = form //pokemon.js
        let type = type //pokemon_type.js
        let base_attack = base_attack //pokemon.js
        let base_defense = base_defense //pokemon.js
        let base_stamina = base_stamina //pokemon.js
        let charged_moves = charged_moves //pokemon_moves.js
        let fast_moves = fast_moves //pokemon_moves.js
        let elite_charged_moves = elite_charged_moves //pokemon_moves.js
        let elite_fast_moves = elite_fast_moves //pokemon_moves.js
    }

    import_pokemon() {
        // Create table with pokemon id as keys

        $data = {};

        // For every pokemon in pokemons.js
        for (var i = 0; i < pokemon.length; i++) {
            if (pokemon[i].form == "Normal") {

                // Base values
                let pokemon_id = pokemon[i].pokemon_id //pokemon.js
                let pokemon_name = pokemon[i].pokemon_name //pokemon.js
                let form = pokemon[i].form //pokemon.js
                let base_attack = pokemon[i].base_attack //pokemon.js
                let base_defense = pokemon[i].base_defense //pokemon.js
                let base_stamina = pokemon[i].base_stamina //pokemon.js

                // Finding primary keys for other tables
                let generation_index = generation.findIndex(function () {
                    return generation.id === pokemon[i].pokemon_id;
                })

                let type_index = pokemon_type.findIndex(function () {
                    return (pokemon_type.pokemon_id === pokemon[i].pokemon_id) && (pokemon_type.form === pokemon[i].form);
                })

                let move_index = pokemon_moves.findIndex(function () {
                    return (pokemon_moves.pokemon_id === pokemon[i].pokemon_id) && (pokemon_moves.form === pokemon[i].form);
                })

                // Importing values from other tables
                let generation_number = generation[generation_index].generation_number
                let type = pokemon_type[type_index].type_name
                let charged_moves = pokemon_moves[move_index].charged_moves
                let fast_moves = pokemon_moves[move_index].fast_moves
                let elite_charged_moves = pokemon_moves[move_index].elite_charged_moves
                let elite_fast_moves = pokemon_moves[move_index].elite_fast_moves
            }
        }


    }

    display_array(array) {
        let result = "";
        for (var i = 0; i < array.length; i++) {
            result.concat(array[i] + "\n");
        }
        return result;
    }

    toString() {
        /*
        let string =
            "Pokemon ID: " + this.pokemon_id + "\n"
            + "Pokemon Name: " + this.pokemon_name + "\n"
            + "Generation Number: " + this.generation_number + "\n"
            + "Form: " + this.form + "\n"
            + "Type: " + this.display_array(this.type) + "\n"
            + "-- STATS --" + "\n"
            + "Base Attack: " + this.base_attack + "\n"
            + "Base Defense: " + this.base_defense + "\n"
            + "Base Stamina: " + this.base_stamina + "\n"
            + "-- MOVES --" + "\n"
            + "Charged Moves: " + this.display_array(this.charged_moves) + "\n"
            + "Fast Moves: " + this.display_array(this.fast_moves) + "\n"
            + "Elite Charged Moves: " + this.display_array(this.elite_charged_moves) + "\n"
            + "Elite Fast Moves: " + this.display_array(this.elite_fast_moves) + "\n";
        */
        let string = this.pokemon_id + " | " + this.pokemon_name + " | Gen " + this.generation_number + " | " + this.form + " form\n"; 
        return string;
    }
}