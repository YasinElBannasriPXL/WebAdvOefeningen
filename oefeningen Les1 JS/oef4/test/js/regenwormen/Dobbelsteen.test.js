import Dobbelsteen from '../../../src/js/regenwormen/Dobbelsteen';
// naam = Yasin El Bannasri


test('dobbelsteen wordt aangemaakt met correcte ingave', () => {
    let dobbelsteen = new Dobbelsteen('1');
    expect(dobbelsteen.getZijde()).toBe('1');
})

test('error voor zijde S', () => {
    expect(() => {
        let wrongDobbelsteen = new Dobbelsteen('S');
    }).toThrow();
})
