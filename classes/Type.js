class Type {

    all_types = [
    ]

    test() {
        // Create type table with type as keys and effectiveness as values from the type_effectiveness.js file
        for (var i = 0; i < this.all_types.length; i++) {
            this.all_types[i] = new Object();
            for (var j = 0; j < this.all_types.length; j++) {
                this[this.all_types[i]][this.all_types[j]] = 1.0;
            }
        }
    }

    constructor(type_def, type_att , effectivness) {
        this.type_def = type_def;
        this.type_att = type_att;
        this.effectivness = effectivness;
        // Si la combinaison type_att/type_def n'est pas déjà dans all_types, on l'ajoute



        
    }

    toString() {
        return this.type_name;
    }
}