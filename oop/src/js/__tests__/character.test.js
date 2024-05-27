import Character from '../class/character';

test('Throws an error when the name is invalid', () => {
    expect(() => new Character('Blue tractor', 'Magician')).toThrowError('Длина имени должна составлять от 2 до 10 символов');
});

test('Throws an error when the type is invalid', () => {
    expect(() => new Character('Vadim', 'Programmer')).toThrowError('Недопустимый тип. Должен быть одним из следующих персонажей: bowman, swordsman, magician, undead, zombie, daemon');
});

test('Creates a character with default values, level check', () => {
    const character = new Character('Tomi', 'Magician');
    expect(character.level).toBe(1);
});

test('Creates a character with default values, health check', () => {
    const character = new Character('George', 'Daemon');
    expect(character.health).toBe(100);
});

test('The levelUp method increases the level', () => {
    const character = new Character('Obi', 'Swordsman');
    character.levelUp();
    expect(character.level).toBe(2);
});

test('The levelUp method increases the level', () => {
    const character = new Character('Legolas', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrowError('Невозможно повысить уровень');
});
