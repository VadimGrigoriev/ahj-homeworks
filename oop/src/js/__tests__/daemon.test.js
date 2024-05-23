import Daemon from '../class/daemon';

test('Test, with default values', () => {
    const daemon = new Daemon('Valery', 'Daemon');
    expect(daemon.attack).toBe(10);
});

test('The test of the parent levelUp method', () => {
    const daemon = new Daemon('Alex', 'Daemon');
    daemon.levelUp();
    expect(daemon.level).toBe(2);
});

test('The test of the parent levelUp method with zero health', () => {
    const daemon = new Daemon('Semen', 'Daemon');
    daemon.health = 0;
    expect(() => daemon.levelUp()).toThrowError('Невозможно повысить уровень');
});

test('Test of the parent damage method', () => {
    const daemon = new Daemon('Igor', 'Daemon', 100, 1, 10, 40);
    daemon.damage(10);
    expect(daemon.health).toBe(94);
});
