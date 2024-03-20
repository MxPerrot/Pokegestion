class Pokemon {
    static all_pokemon = [];

    constructor(pokemon_id, pokemon_name, generation_number, form, type, base_attack, base_defense, base_stamina, charged_moves, fast_moves, elite_charged_moves, elite_fast_moves) {
        this.pokemon_id = pokemon_id //pokemon.js
        this.pokemon_name = pokemon_name //pokemon.js
        this.generation_number = generation_number //generation.js
        this.form = form //pokemon.js
        this.type = type //pokemon_type.js
        this.base_attack = base_attack //pokemon.js
        this.base_defense = base_defense //pokemon.js
        this.base_stamina = base_stamina //pokemon.js
        this.charged_moves = charged_moves //pokemon_moves.js
        this.fast_moves = fast_moves //pokemon_moves.js
        this.elite_charged_moves = elite_charged_moves //pokemon_moves.js
        this.elite_fast_moves = elite_fast_moves //pokemon_moves.js
        Pokemon.all_pokemon[pokemon_id] = this;
    }

    static import_pokemon() {
        // For every pokemon in pokemons.js
        for (var i = 0; i < pokemon.length; i++) {
            if (pokemon[i].form == "Normal") {
                console.log(pokemon[i].pokemon_name);
                // Base values
                let pokemon_id = pokemon[i].pokemon_id //pokemon.js
                let pokemon_name = pokemon[i].pokemon_name //pokemon.js
                let form = pokemon[i].form //pokemon.js
                let base_attack = pokemon[i].base_attack //pokemon.js
                let base_defense = pokemon[i].base_defense //pokemon.js
                let base_stamina = pokemon[i].base_stamina //pokemon.js
                
                
                // DEBUG
                /*
                for (let i = 0; i < generation[0].length; i++) {
                    console.log(generation[0]["Generation " + i].size);
                }
                */

                // Solution pour trouver la generation
                let generation_num = 0;
                for (const gen in generation[0]) {
                    for(let u = 0; u < generation[0][gen].length; u++){
                        if(generation[0][gen][u].id === pokemon[i].pokemon_id){
                            generation_num = generation[0][gen][u].generation_number;
                        }
                    }
                }
                
                let typepk
                for(let u = 0; u < pokemon_type.length; u++){
                    if(pokemon_type[u].pokemon_id === pokemon[i].pokemon_id && pokemon_type[u].form === pokemon[i].form){
                        console.log(pokemon_type[u].type);
                        typepk = pokemon_type[u].type;
                    }
                }
                
                let move_index = 0;
                for(let u = 0; u < pokemon_moves.length; u++){
                    if(pokemon_moves[u].pokemon_id === pokemon[i].pokemon_id && pokemon_moves[u].form === pokemon[i].form){
                        console.log(pokemon_moves[u].charged_moves);
                        move_index = u;
                    }
                }
                // Importing values from other tables
                let generation_number = generation_num
                let type = typepk
                for(let y = 0; y < type.length; y++) {
                    console.log(type[y]);
                    new Type(type[y]);
                }

                let charged_moves = pokemon_moves[move_index].charged_moves
                let fast_moves = pokemon_moves[move_index].fast_moves
                let elite_charged_moves = pokemon_moves[move_index].elite_charged_moves
                let elite_fast_moves = pokemon_moves[move_index].elite_fast_moves
                // creating the new pokemon object
                new Pokemon(pokemon_id, pokemon_name, generation_number, form, type, base_attack, base_defense, base_stamina, charged_moves, fast_moves, elite_charged_moves, elite_fast_moves);
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

    static toStringAllPokemon(){
        let string = "";
        for (const key in this.all_pokemon) {
            if (this.all_pokemon.hasOwnProperty(key)) {
                string += this.all_pokemon[key].toString();
            }
        }
        return string;
    }
}