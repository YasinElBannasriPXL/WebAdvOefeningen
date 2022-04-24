"use strict";
// naam = Yasin El Bannasri

export default class Dobbelsteen {
    constructor(zijde) {
        if (zijde === '1' || zijde === '2' || zijde === '3' || zijde === '4' || zijde === '5' || zijde === 'R') {
            this._zijde = zijde;
        } else {
            throw new Error(`${zijde} is not a valid zijde`);
        }
    }

    getZijde() {
        return this._zijde;
    }

    getNumeriekeWaarde() {
        if (this.getZijde === 'R') 
        {
            return 5;
        }
        else if (this.getZijde === '1' || this.getZijde === '2' || this.getZijde === '3' || this.getZijde === '4' || this.getZijde === '5') {
            return parseInt(this.getZijde);
        }
        else throw new Error('kan geen numerieke waarde krijgen van zijde');
    }

}
