class Type {

    all_types = [
    ]

    constructor(type) {
        if(!this.all_types.includes(type)) {
            this.all_types[type] = new Object();
            foreach(type_effectiveness[type], key => value) {
                this.all_types[type][key] = value;
            }
        }
    }

    toString() {
        return this.type_name;
    }
}