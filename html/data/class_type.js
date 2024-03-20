class Type {

    static all_types = [
    ]

    constructor(type) {
           if(Type.all_types[type] == undefined) {
            Type.all_types[type] = new Object();
            // Avec une boucle
            for (const key in type_effectiveness[0][type]) {
                if (type_effectiveness[0][type].hasOwnProperty(key)) {
                    Type.all_types[type][key] = type_effectiveness[0][type][key];
                }
            }
            console.log(Type.all_types[type]);
            console.log("-----------------");
            /*
            // Par assignation directe
            this.all_types[type[i]] = new Object(); 
            this.all_types[type[i]] = type_effectiveness[0][type[i]];
            console.log(this.all_types[type[i]]);
            */
        }
    }

    toString() {
        return this.all_types;
    }
}