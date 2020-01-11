const { getMaskedPhone } = require('./method');

describe('getMaskedPhone', () => {
    it('Передан тип данных, отличный от number, должно вернуться null', () => {
        expect(getMaskedPhone('79999999999')).toBe(null);
    });
    it('Передан number, но длина меньше 11, должно вернуться null', () => {
        expect(getMaskedPhone(7999)).toBe(null);
    });
    it('Передан number, но длина больше 11, должно вернуться null', () => {
        expect(getMaskedPhone(71234567890123)).toBe(null);
    });
    it('Передан number, но длина 11, должно вернуться корректное значение', () => {
        expect(getMaskedPhone(79991234567)).toBe('*******4567');
    });
});