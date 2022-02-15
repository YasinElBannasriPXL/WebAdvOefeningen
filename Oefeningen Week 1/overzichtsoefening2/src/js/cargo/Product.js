"use strict";
// naam
export default class Product{
    constructor(id, weight) {
        if (id > 0 && Number.isInteger(id) && Number.isInteger(weight) && weight > 0) {
            this._id = id;
            this._weight = weight;
        } else {
            console.error("weight or id under 0 or invalid input")
        }
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    get id() {
        return this._id;
    }
    
}
