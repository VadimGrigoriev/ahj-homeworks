import ValidatorTel from '../js/validator.tel';

test('Validation test №1', () => {
    const validator = new ValidatorTel();
    expect(validator.validateTel('8 (927) 000-00-00')).toBe('+79270000000');
});

test('Validation test №2', () => {
    const validator = new ValidatorTel();
    expect(validator.validateTel('+86 000 000 0000')).toBe('+860000000000');
});

test('Validation test №3', () => {
    const validator = new ValidatorTel();
    expect(validator.validateTel('+7 960 000 00 00')).toBe('+79600000000');
});
