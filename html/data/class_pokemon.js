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
                //console.log(pokemon[i].pokemon_name);
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
                        //console.log(pokemon_type[u].type);
                        typepk = pokemon_type[u].type;
                    }
                }
                
                let move_index = 0;
                for(let u = 0; u < pokemon_moves.length; u++){
                    if(pokemon_moves[u].pokemon_id === pokemon[i].pokemon_id && pokemon_moves[u].form === pokemon[i].form){
                        //console.log(pokemon_moves[u].charged_moves);
                        move_index = u;
                    }
                }
                // Importing values from other tables
                let generation_number = generation_num
                let type = typepk
                for(let y = 0; y < type.length; y++) {
                    //console.log(type[y]);
                    new Type(type[y]);
                }

                let charged_moves = pokemon_moves[move_index].charged_moves
                for(let y = 0; y < charged_moves.length; y++) {
                    //console.log(charged_moves[y]);
                    new Attack(charged_moves[y]);
                }
                let fast_moves = pokemon_moves[move_index].fast_moves
                for(let y = 0; y < fast_moves.length; y++) {
                    //console.log(fast_moves[y]);
                    new Attack(fast_moves[y]);
                }
                let elite_charged_moves = pokemon_moves[move_index].elite_charged_moves
                for(let y = 0; y < elite_charged_moves.length; y++) {
                    //console.log(elite_charged_moves[y]);
                    new Attack(elite_charged_moves[y]);
                }
                let elite_fast_moves = pokemon_moves[move_index].elite_fast_moves
                for(let y = 0; y < elite_fast_moves.length; y++) {
                    //console.log(elite_fast_moves[y]);
                    new Attack(elite_fast_moves[y]);
                }
                // creating the new pokemon object
                new Pokemon(pokemon_id, pokemon_name, generation_number, form, type, base_attack, base_defense, base_stamina, charged_moves, fast_moves, elite_charged_moves, elite_fast_moves);
            }
        }
    }

    // méthode getTypes() pour retourner une liste des types de la classe Type
    static getTypes() {
        return Type.all_types;
    }

    static getAttacks() {
        return Attack.all_attacks;
    }

    toString() {
        let string =  this.pokemon_id + " | " + this.pokemon_name + " | Gen " + this.generation_number + " | "
                    + this.form + " form | " + this.base_attack + " attack | " + this.base_defense + " defense | " 
                    + this.base_stamina + " stamina | "; 
        return string;
    }

    static toString(){
        let string = "";
        for (const key in this.all_pokemon) {
            if (this.all_pokemon.hasOwnProperty(key)) {
                string += this.all_pokemon[key].toString();
            }
        }
        return string;
    }
}