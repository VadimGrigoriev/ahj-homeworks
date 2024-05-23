/* eslint-disable no-trailing-spaces */
export default class Character {
    constructor(name, type, health = 100, level = 1, attack = 0, defence = 0) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Длина имени должна составлять от 2 до 10 символов');
        }
        
        type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
        if (!['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'].includes(type)) {
            throw new Error('Недопустимый тип. Должен быть одним из следующих персонажей: Bowman, Swordsman, Magician, Undead, Zombie, Daemon');
        }
        
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack = ((this.attack * 20) / 100) + this.attack;
            this.defence = ((this.defence * 20) / 100) + this.defence;
            this.health = 100;
        } else if (this.health === 0) {
            throw new Error('Невозможно повысить уровень');
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
