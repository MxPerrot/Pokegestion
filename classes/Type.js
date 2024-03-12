class Type {

    all_types = [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ]

    constructor(type_def, type_att , effectivness) {
        this.type_def = type_def;
        this.type_att = type_att;
        this.effectivness = effectivness;
    }

    toString() {
        return this.type_name;
    }
}