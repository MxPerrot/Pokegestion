class Type {

    static all_types = [
    ]

    constructor(type) {
           if(Type.all_types[type] == undefined) {
            Type.all_types[type] = new Object();
            // Avec une boucle
            for (const key in type_effectiveness[0][type]) {
                if (type_effectiveness[0][type].hasOwnProperty(key)) {
                    this.name = type;
                    this.effectiveness = type_effectiveness[0][type];
                    Type.all_types[type][key] = type_effectiveness[0][type][key];
                }
            }
            console.log(Type.all_types[type]);
        }
    }

    // méthode toString pour afficher tout les types et leur efficacité de all_types à faire.
    toString() {
        return ;
    }

    static toString(){
        for (const key in this.all_types) {
            if (this.all_types.hasOwnProperty(key)) {
                console.log(this.all_types[key]);
            }
        }
    }
}