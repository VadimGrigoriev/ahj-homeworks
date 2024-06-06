import Character from '../class/character';

test('Name verification', () => {
    const character = new Character('Sniper');
    expect(character.name).toBe('Sniper');
});

test('Health check', () => {
    const character = new Character('Hoodwink');
    expect(character.health).toBe(100);
});

test('Level check', () => {
    const character = new Character('Enchantress');
    expect(character.level).toBe(1);
});
