class Attack {

    static all_attacks = [];

    constructor(attack) {
        this.name = attack;
        // deux boucles une qui vas chercher dans charged_moves et l'autre dans fast_moves le nom de l'attaque pour trouver l'attaque
        for(let i = 0; i < charged_moves.length; i++) {
            if(charged_moves[i].name === attack) {
                // vérification que l'attaque n'est pas déjà présente dans le tableau
                if(Attack.all_attacks.includes(charged_moves[i]) === false) {
                    this.move_id = charged_moves[i].move_id;
                    this.power = charged_moves[i].power
                    this.type = charged_moves[i].type
                    this.duration = charged_moves[i].duration
                    this.energy_delta = charged_moves[i].energy_delta
                    this.stamina_loss_scaler = charged_moves[i].stamina_loss_scaler
                    this.critical_chance = charged_moves[i].critical_chance
                    Attack.all_attacks[this.move_id] = this;
                    return;
                }
            }
        }
        for(let i = 0; i < fast_moves.length; i++) {
            if(fast_moves[i].name === attack) {
                // vérification que l'attaque n'est pas déjà présente dans le tableau
                if(Attack.all_attacks.includes(fast_moves[i]) === false) {
                    this.move_id = fast_moves[i].move_id;
                    this.power = fast_moves[i].power
                    this.type = fast_moves[i].type
                    this.duration = fast_moves[i].duration
                    this.energy_delta = fast_moves[i].energy_delta
                    this.stamina_loss_scaler = fast_moves[i].stamina_loss_scaler
                    Attack.all_attacks[this.move_id] = this;
                    return;
                }
            }
        }
    }


    /********************************************************************
    *                       Getters and Setters                         *
    ********************************************************************/

    // name
    getName() {return this.name;}
    setName(name) {this.name = name;}

    // move_id
    getMoveId() {return this.move_id;}
    setMoveId(move_id) {this.move_id = move_id;}

    // power
    getPower() {return this.power;}
    setPower(power) {this.power = power;}

    // type
    getType() {return this.type;}
    setType(type) {this.type = type;}

    // duration
    getDuration() {return this.duration;}
    setDuration(duration) {this.duration = duration;}

    // energy_delta
    getEnergyDelta() {return this.energy_delta;}
    setEnergyDelta(energy_delta) {this.energy_delta = energy_delta;}

    // stamina_loss_scaler
    getStaminaLossScaler() {return this.stamina_loss_scaler;}
    setStaminaLossScaler(stamina_loss_scaler) {this.stamina_loss_scaler = stamina_loss_scaler;}

    // critical_chance
    getCriticalChance() {return this.critical_chance;}
    setCriticalChance(critical_chance) {this.critical_chance = critical_chance;}

    /********************************************************************
    *                             toString                              *
    ********************************************************************/

    // toString() d'instance de la classe Attack
    toString() {
        let string = "";
        string += `[${this.move_id}] ${this.name} | Power : ${this.power} | Type : ${this.type} \n`;
        return string;
    }

    // toString() de la classe Attack
    static toString(){
        let string = "";
        for (const key in this.all_attacks) {
            if (this.all_attacks.hasOwnProperty(key)) {
                string += `${key} | Attack : ${this.all_attacks[key].name} | Power : ${this.all_attacks[key].power} | Type : ${this.all_attacks[key].type} \n`;
            }
        }
        return string;
    }
}