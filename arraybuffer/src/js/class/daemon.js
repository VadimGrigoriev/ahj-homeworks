/* eslint-disable no-unused-vars */
import SupportCharacter from './support.character';

export default class Daemon extends SupportCharacter {
    constructor(name, distance = 1) {
        super(name);        
        this.distance = distance;
        
        this.type = 'Daemon';
        this.attack = 100;
        this.defence = 40;
    }
}
