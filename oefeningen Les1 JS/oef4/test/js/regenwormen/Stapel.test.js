import Dobbelsteen from '../../../src/js/regenwormen/Dobbelsteen';
import Selectie from '../../../src/js/regenwormen/Selectie';
import Stapel from '../../../src/js/regenwormen/Stapel';
// naam = Yasin El Bannasri

test('voegSelectieToe throws error when zijde already in array', () => {
    expect(() => {
        let dobbelsteen1 = new Dobbelsteen('1');
        let selectie = new Selectie(3, dobbelsteen1);
        let selectie2 = new Selectie(2, dobbelsteen1);
        let stapel = new Stapel();
        stapel.voegSelectieToe(selectie);
        stapel.voegSelectieToe(selectie2);
    }).toThrow();
})

test('getNumeriekeWaarde returns 0 when dobbelsteen with zijde R not found in array', () => {
    let dobbelsteen1 = new Dobbelsteen('1');
    let dobbelsteen2 = new Dobbelsteen('2');
    let selectie = new Selectie(3, dobbelsteen1);
    let selectie2 = new Selectie(2, dobbelsteen2);
    let stapel = new Stapel();
    stapel.voegSelectieToe(selectie);
    stapel.voegSelectieToe(selectie2);
    expect(stapel.getNumeriekeWaarde()).toBe(0);
})


