"use strict";
// naam =  Yasin El Bannasri
import Dobbelsteen from './Dobbelsteen';
import Selectie from './Selectie';

export default class Stapel {
    constructor() {
        this._selecties = [];
    }

    voegSelectieToe(selectie) {
        if (selectie instanceof Selectie) {
            if (this._selecties.some(s => selectie.getDobbelsteen().getZijde() === s.getDobbelsteen().getZijde())) {
                throw new Error('Dobbelsteen already exists in selecties');
            } else {
                this._selecties.push(selectie);
            }
            
        } else {
            throw new Error(`${selectie} not an instance of Selectie`)
        }
    }

    getNumeriekeWaarde() {
        selectiesHasR = false;
        somSelecties = 0;

        this._selecties.forEach(s => {
            if (s.getDobbelsteen().getZijde() === 'R') {
                selectiesHasR = true;
            }
            somSelecties += s.getNumeriekeWaarde();
        })

        if (!selectiesHasR) return 0;
        else return somSelecties;
    }
}

