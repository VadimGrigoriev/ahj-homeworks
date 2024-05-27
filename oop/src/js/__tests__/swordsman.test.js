import Swordsman from '../class/swordsman';

test('Test, with default values', () => {
    const swordsman = new Swordsman('Piter', 'Swordsman');
    expect(swordsman.attack).toBe(40);
});

test('The test of the parent levelUp method', () => {
    const swordsman = new Swordsman('Parker', 'Swordsman');
    swordsman.levelUp();
    expect(swordsman.level).toBe(2);
});

test('The test of the parent levelUp method with zero health', () => {
    const swordsman = new Swordsman('Spider', 'Swordsman');
    swordsman.health = 0;
    expect(() => swordsman.levelUp()).toThrowError('Невозможно повысить уровень');
});

test('Test of the parent damage method', () => {
    const swordsman = new Swordsman('Man', 'Swordsman');
    swordsman.damage(10);
    expect(swordsman.health).toBe(91);
});
