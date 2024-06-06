import SupportCharacter from '../class/support.character';

test('Name verification', () => {
    const support = new SupportCharacter('Zeus');
    expect(support.name).toBe('Zeus');
});

test('Checking the getStoned method', () => {
    const support = new SupportCharacter('Zeus');
    expect(support.getStoned()).toBe(false);
});

test('Checking the setStoned method', () => {
    const support = new SupportCharacter('Zeus');
    support.setStoned(true);
    expect(support.stoned).toBe(true);
});

test('Checking the setAttack method', () => {
    const support = new SupportCharacter('Zeus');
    expect(() => support.setStoned(120)).not.toThrow();
});
