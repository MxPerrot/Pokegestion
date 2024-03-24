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
            //console.log(Type.all_types[type]);
        }
    }


    static toString(){
        let string = "";
        for (const key in this.all_types) {
            if (this.all_types.hasOwnProperty(key)) {
                string += key + " ";
            }
        }
        return string;
    }
}