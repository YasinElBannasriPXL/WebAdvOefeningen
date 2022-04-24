import Datum from '../../src/js/accounting/Datum'

describe('datum toString', () => {
    test('toString should return correctly formatted date', () => {
        let date = Datum.make(24, 4, 2022);
        expect(date.toString()).toBe('24/4/2022');
    });
    test('toString should return correctly formatted date with full month', () => {
        let date = Datum.make(24, 4, 2022);
        expect(date.toStringMonth()).toBe('24/apr/2022');
    });
})