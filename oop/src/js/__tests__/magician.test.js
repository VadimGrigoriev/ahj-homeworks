import Magician from '../class/magician';

test('Test, with default values', () => {
    const magician = new Magician('Sasha', 'Magician');
    expect(magician.attack).toBe(10);
});

test('The test of the parent levelUp method', () => {
    const magician = new Magician('Gleb', 'Magician');
    magician.levelUp();
    expect(magician.level).toBe(2);
});

test('The test of the parent levelUp method with zero health', () => {
    const magician = new Magician('NoName', 'Magician');
    magician.health = 0;
    expect(() => magician.levelUp()).toThrowError('Невозможно повысить уровень');
});

test('Test of the parent damage method', () => {
    const magician = new Magician('Vlad', 'Magician');
    magician.damage(10);
    expect(magician.health).toBe(94);
});
