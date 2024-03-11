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

                let pokemon_id = pokemon[i].pokemon_id
                let pokemon_name = pokemon[i].pokemon_name 

                let generation_number = generation[] // where ID is equal to pokemon[i].generation //generation.js
                
                let form = pokemon[i].form 
                
                let type = pokemon_type //pokemon_type.js
                
                let base_attack = pokemon[i].base_attack 
                let base_defense = pokemon[i].base_defense 
                let base_stamina = pokemon[i].base_stamina 
                
                let charged_moves = charged_moves //pokemon_moves.js
                let fast_moves = fast_moves //pokemon_moves.js
                let elite_charged_moves = elite_charged_moves //pokemon_moves.js
                let elite_fast_moves = elite_fast_moves //pokemon_moves.js
            }
        }


    }

    toString() {
        return `${this.name} (${this.form}) - ${this.type1} ${this.type2} - Gen ${this.gen} - ${this.att}/${this.def}/${this.stam} - Lvl ${this.lvl}`;
    }
}