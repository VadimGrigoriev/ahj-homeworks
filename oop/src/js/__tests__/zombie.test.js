import Zombie from '../class/zombie';

test('Test, with default values', () => {
    const zombie = new Zombie('Tom', 'Zombie');
    expect(zombie.attack).toBe(40);
});

test('The test of the parent levelUp method', () => {
    const zombie = new Zombie('Cruise', 'Zombie');
    zombie.levelUp();
    zombie.levelUp();
    expect(zombie.level).toBe(3);
});

test('The test of the parent levelUp method with zero health', () => {
    const zombie = new Zombie('Ethan ', 'Zombie');
    zombie.health = 0;
    expect(() => zombie.levelUp()).toThrowError('Невозможно повысить уровень');
});

test('Test of the parent damage method', () => {
    const zombie = new Zombie('Hunt', 'Zombie');
    zombie.damage(10);
    expect(zombie.health).toBe(91);
});
