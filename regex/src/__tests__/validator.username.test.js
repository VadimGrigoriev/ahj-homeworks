import Validator from '../js/validator.username';

test('Test for the presence of more than 3 digits in the name', () => {
    const validator = new Validator();
    expect(() => validator.validateUsername('No1234Name')).toThrowError('Имя не должно содержать подряд более трёх цифр');
});

test('Test for invalid characters at the beginning of the name', () => {
    const validator = new Validator();
    expect(() => validator.validateUsername('_Vadim')).toThrowError(/Ошибка валидации имени/);
});

test('Test for invalid characters at the end of the name', () => {
    const validator = new Validator();
    expect(() => validator.validateUsername('Vadim1')).toThrowError(/Ошибка валидации имени/);
});

test('Test with the correct name', () => {
    const validator = new Validator();
    expect(validator.validateUsername('Junior')).toBe(true);
});
