class Pokemon{
    constructor(id, name, form, type1, type2, gen, att, def, stam, lvl){
        this.id = id;
        this.name = name;
        this.form = form;
        this.type1 = type1;
        this.type2 = type2;
        this.gen = gen;
        this.att = att;
        this.def = def;
        this.stam = stam;
        this.lvl = lvl;
    }

    import_pokemon(){
        
    }

    toString(){
        return `${this.name} (${this.form}) - ${this.type1} ${this.type2} - Gen ${this.gen} - ${this.att}/${this.def}/${this.stam} - Lvl ${this.lvl}`;
    }
}