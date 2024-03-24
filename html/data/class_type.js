class Type {

    static all_types = [
    ]

    constructor(type) {
        if(Type.all_types[type] == undefined) {
            this.type = type;
            // Avec une boucle
            for (const key in type_effectiveness[0][type]) {
                if (type_effectiveness[0][type].hasOwnProperty(key)) {
                    this.type_effectiveness = type_effectiveness[0][type];
                }
            }
            Type.all_types[type] = this;
            //console.log(Type.all_types[type]);
        }
    }

    displayArray() {
        let string = "";
        for (const key in this.type_effectiveness) {
            if (this.type_effectiveness.hasOwnProperty(key)) {
                string += `${key} | Effectivness ${this.type_effectiveness[key]} \n`;
            }
        }
        return string;
    }

    /********************************************************************
    *                        Getters and Setters                        *
    ********************************************************************/

    // type
    getType() {return this.type;}
    setType(type) {this.type = type;}

    // type_effectiveness
    getTypeEffectiveness() {return this.type_effectiveness;}
    setTypeEffectiveness(type_effectiveness) {this.type_effectiveness = type_effectiveness;}


    /********************************************************************
    *                              toString                             *
    ********************************************************************/

    // toString() d'instance de la classe Type
    toString() {
        let string = "";
        string += `Type : ${this.type} | Effectivness : {\n ${this.displayArray()}} \n`;
        return string;
    }

    // toString() de la classe Type
    static toString(){
        let string = "";
        for (const key in this.all_types) {
            if (this.all_types.hasOwnProperty(key)) {
                string += this.all_types[key].toString();
            }
        }
        return string;
    }
}