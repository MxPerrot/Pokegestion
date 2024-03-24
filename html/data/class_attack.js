class Attack {

    static all_attacks = [
    ]

    constructor(attack) {
        // deux boucles une qui vas chercher dans charged_moves et l'autre dans fast_moves le nom de l'attaque pour trouver l'attaque
        for(let i = 0; i < charged_moves.length; i++) {
            if(charged_moves[i].name === attack) {
                // vérification que l'attaque n'est pas déjà présente dans le tableau
                if(Attack.all_attacks.includes(charged_moves[i]) === false) {
                    Attack.all_attacks[charged_moves[i].move_id] = charged_moves[i];
                }
            }
        }
        for(let i = 0; i < fast_moves.length; i++) {
            if(fast_moves[i].name === attack) {
                // vérification que l'attaque n'est pas déjà présente dans le tableau
                if(Attack.all_attacks.includes(fast_moves[i]) === false) {
                    Attack.all_attacks[fast_moves[i].move_id] = fast_moves[i];
                }
            }
        }
    }

    toString() {
        return this.all_Attacks;
    }
}