import Magician from '../class/magician';

test('Checking the distance', () => {
    const magician = new Magician('Cristal Maiden', 2);
    expect(magician.distance).toBe(2);
});

test('Checking the getStoned method', () => {
    const magician = new Magician('Cristal Maiden');
    expect(magician.getStoned()).toBe(false);
});

test('Checking the setStoned method', () => {
    const magician = new Magician('Cristal Maiden');
    magician.setStoned(true);
    expect(magician.stoned).toBe(true);
});

test('Checking the setStoned method', () => {
    const magician = new Magician('Cristal Maiden');
    magician.setAttack(120);
    expect(magician.attack).toBe(120);
});

test('Checking the getAttack method', () => {
    const magician = new Magician('Cristal Maiden', 4);
    expect(magician.getAttack()).toBe(77);
});

test('Checking the getAttack method with stoned', () => {
    const magician = new Magician('Cristal Maiden', 4);
    magician.setStoned(true);
    expect(magician.getAttack()).toBe(67);
});
