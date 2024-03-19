class Type {

    all_types = [
    ]

    constructor(type) {
        if(!this.all_types.includes(type)) { // Jsp si ça vérifie juste la clé, ce qui doit être le cas
            this.all_types[type] = new Object(); 

            // Avec une boucle
            for (const key in type_effectiveness[type]) {
                if (type_effectiveness[type].hasOwnProperty(key)) {
                    this.all_types[type][key] = type_effectiveness[type][key];
                }
            }
            console.log(this.all_types[type]);
            console.log("-----------------");

            // Par assignation directe
            this.all_types[type] = new Object(); 
            this.all_types[type] = type_effectiveness[type];
            console.log(this.all_types[type]);

        }
    }

    toString() {
        return this.type_name;
    }
}