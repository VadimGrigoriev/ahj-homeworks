/* eslint-disable no-trailing-spaces */
import Character from './character';

export default class SupportCharacter extends Character {
    constructor(name) {
        super(name);
        
        this.stoned = false;
        
        this.type = null;
        this.attack = null;
        this.distance = null;
    }

    getStoned() {
        return this.stoned;
    }

    setStoned(value) {
        this.stoned = value;
    }

    getAttack() {
        let baseAttack = this.attack * (1 - (this.distance - 1) * 0.1);
        if (this.stoned) {
            baseAttack -= Math.log2(this.distance) * 5;
        }
        return baseAttack;
    }

    setAttack(value) {
        this.attack = value;
    }
}
