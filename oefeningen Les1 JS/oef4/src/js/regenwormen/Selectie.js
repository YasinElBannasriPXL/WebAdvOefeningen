"use strict";
// naam = Yasin El Bannasri
import Dobbelsteen from './Dobbelsteen';

export default class Selectie {
    constructor(aantal, dobbelsteen) {
        if (!(dobbelsteen instanceof Dobbelsteen)) {
            throw new Error('not an instence of dobbelsteen')
        } else {
        this._aantal = aantal;
        this._dobbelsteen = dobbelsteen;
        } 
    }

    getAantal() {
        return this._aantal;
    }
    getDobbelsteen() {
        return this._dobbelsteen;
    }
    getNumeriekeWaarde() {
        return this._aantal * this._dobbelsteen.getNumeriekeWaarde();
    }
}
