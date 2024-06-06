export default class ArrayBufferConverter {
    constructor() {
        this.buffer = null;
    }

    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        if (!this.buffer) {
            throw new Error('Буфер не загружен');
        }

        const uint16Array = new Uint16Array(this.buffer);
        return String.fromCharCode(...uint16Array);
    }
}
