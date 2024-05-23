import Bowman from '../class/bowman';

test('Test, with default values', () => {
    const bowman = new Bowman('Stark', 'Bowman');
    expect(bowman.attack).toBe(25);
});

test('The test of the parent levelUp method', () => {
    const bowman = new Bowman('Robin', 'Bowman');
    bowman.levelUp();
    expect(bowman.level).toBe(2);
});

test('The test of the parent levelUp method with zero health', () => {
    const bowman = new Bowman('Ivan', 'Bowman');
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrowError('Невозможно повысить уровень');
});

test('Test of the parent damage method', () => {
    const bowman = new Bowman('Igor', 'Bowman', 100, 1, 25, 25);
    bowman.damage(10);
    expect(bowman.health).toBe(92.5);
});
