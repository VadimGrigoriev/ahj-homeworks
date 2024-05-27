/* eslint-disable no-trailing-spaces */
export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Длина имени должна составлять от 2 до 10 символов');
        }
        
        const types = ['bowman', 'swordsman', 'magician', 'undead', 'zombie', 'daemon'];

        if (!types.includes(type.toLowerCase())) {
            throw new Error(`Недопустимый тип. Должен быть одним из следующих персонажей: ${types.join(', ')}`);
        }
        
        this.name = name;
        this.type = type;

        this.health = 100;
        this.level = 1;

        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Невозможно повысить уровень');
        }

        if (this.health > 0) {
            this.level += 1;
            this.attack = ((this.attack * 20) / 100) + this.attack;
            this.defence = ((this.defence * 20) / 100) + this.defence;
            this.health = 100;
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
