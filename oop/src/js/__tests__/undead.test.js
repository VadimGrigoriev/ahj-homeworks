import Undead from '../class/undead';

test('Test, with default values', () => {
    const undead = new Undead('Jackie', 'Undead');
    expect(undead.attack).toBe(25);
});

test('The test of the parent levelUp method', () => {
    const undead = new Undead('Chan', 'Undead');
    undead.levelUp();
    expect(undead.level).toBe(2);
});

test('The test of the parent levelUp method with zero health', () => {
    const undead = new Undead('Drunken', 'Undead');
    undead.health = 0;
    expect(() => undead.levelUp()).toThrowError('Невозможно повысить уровень');
});

test('Test of the parent damage method', () => {
    const undead = new Undead('Master', 'Undead', 100, 1, 25, 25);
    undead.damage(10);
    expect(undead.health).toBe(92.5);
});
