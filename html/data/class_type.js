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

    toString() {
        let string = "";
        string += `Type : ${this.type} | Effectivness : {\n ${this.displayArray()}} \n`;
        return string;
    }

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