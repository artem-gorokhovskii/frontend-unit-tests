// describe('Test block name', () => {
//     describe('inner text block', () => {
//         expect(false).toBe(true);
//     })
//     it('test name', () => {
//         expect(1).toBe(1);
//     });
//     test('another test name', () => {
//         expect(true).toEqual(true);
//     });
// });

describe('Test block name', () => {
    beforeAll(() => {
        console.log('beforeAll');
    });
    beforeEach(() => {
        console.log('beforeEach');
    });
    afterEach(() => {
        console.log('afterEach');
    });
    afterAll(() => {
        console.log('afterAll');
    });
    it('test name', () => {
        expect(1).toBe(1);
    });
    test('another test name', () => {
        expect(true).toEqual(true);
    });
});