/* eslint-disable no-unused-vars */
import SupportCharacter from './support.character';

export default class Magician extends SupportCharacter {
    constructor(name, distance = 1) {
        super(name);
        this.distance = distance;

        this.type = 'Magician';
        this.attack = 110;
        this.defence = 40;
    }
}
