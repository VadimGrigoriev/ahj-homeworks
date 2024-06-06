import getBuffer from '../arrayBuffer/getBuffer';
import ArrayBufferConverter from '../arrayBuffer/arrayBufferConverter';

test('Checking the toString function without buffer', () => {
    const converter = new ArrayBufferConverter();
    expect(() => converter.toString()).toThrowError('Буфер не загружен');
});

test('Checking the load function', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
});

test('Checking the toString function', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
