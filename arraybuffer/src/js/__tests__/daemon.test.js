import Daemon from '../class/daemon';

test('Checking the distance', () => {
    const daemon = new Daemon('Lion');
    expect(daemon.distance).toBe(1);
});

test('Checking the getStoned method', () => {
    const daemon = new Daemon('Lion');
    expect(daemon.getStoned()).toBe(false);
});

test('Checking the setStoned method', () => {
    const daemon = new Daemon('Lion');
    daemon.setStoned(true);
    expect(daemon.stoned).toBe(true);
});

test('Checking the setStoned method', () => {
    const daemon = new Daemon('Lion');
    daemon.setAttack(120);
    expect(daemon.attack).toBe(120);
});

test('Checking the getAttack method', () => {
    const daemon = new Daemon('Lion', 2);
    expect(daemon.getAttack()).toBe(90);
});

test('Checking the setAttack method with stoned', () => {
    const daemon = new Daemon('Lion', 2);
    daemon.setStoned(true);
    expect(daemon.getAttack()).toBe(85);
});
