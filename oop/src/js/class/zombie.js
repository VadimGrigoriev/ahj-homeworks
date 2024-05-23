/* eslint-disable no-unused-vars */
import Character from './character';

export default class Zombie extends Character {
    constructor(name, type, health, level, attack = 40, defence = 10) {
        super(name, type, health, level, attack, defence);
    }
}
