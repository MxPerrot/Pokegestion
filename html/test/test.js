//Pokemon.import_pokemon();
/*
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].form == "Normal") {
        // DEBUG type
        let type_index = pokemon_type.findIndex(function () {
            return (pokemon_type.pokemon_id === pokemon[i].pokemon_id) && (pokemon_type.form === pokemon[i].form);
        })
        for(let u = 0; u < pokemon_type.length; u++){
            if(pokemon_type[u].pokemon_id === pokemon[i].pokemon_id && pokemon_type[u].form === pokemon[i].form){
                console.log(pokemon_type[u].type);
            }
        }



        // DEBUG Generation
        
        for (let y = 1; y < 8; y++) {
            console.log(generation[0]["Generation " + y]);
        }
        console.log(
        //  const   array  index_objet    num  index
            generation[0]["Generation " + i][47]["id"]
        );
        // FIN DEBUG


        TODO: fix generation_index search

        // Finding primary keys for other tables
        let generation_index = 0;

        for (const gen in generation[0]) {
            for(u = 0; u < generation[0][gen].length; u++){
                if(generation[0][gen][u].id === pokemon[i].pokemon_id){
                    generation_index = generation[0][gen][u].generation_number;
                }
            }
        }


        console.log(generation_index); // debug
        
    }
}*/