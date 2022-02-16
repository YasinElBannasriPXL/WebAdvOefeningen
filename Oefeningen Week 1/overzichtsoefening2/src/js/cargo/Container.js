"use strict";
// naam: Yasin El Bannasri
import Product from './Product';
export default class Container{
    constructor(maxWeight) {
        if (maxWeight < 0) {
            throw new Error('Maxweight under 0');
        } else {
            this._products = [];
            this._maxWeight = maxWeight;
        }
    }
    addProduct(product) {
        if (product instanceof Product) {
            this._products.forEach(p => {
                if (p.id === product.id) {
                    throw new Error('Product already in container');
                }
            });
            let totalWeight = 0;
            this._products.forEach(p => {
                totalWeight += p.weight;
            });
            totalWeight += product.weight;
            // console.log(`Before TOTALWEIGHT the weight is: ${totalWeight} and ${totalWeight > this._maxWeight} \n maxweight is ${this._maxWeight}`)
            if (totalWeight > this._maxWeight) {
                throw new Error("Too heavy");
            }
            // console.log("after too heavy");
            this._products.push(product);
        } else {
            throw new Error('Not instance of product)')
        }
    }
    getProductAtIndex(index) {
        if (index >= 0 && typeof index === 'number' && index < this._products.length) {
            return this._products[index];
        } else {
            throw new Error ('Index out of bounds');
        }
    } 

    //unnecessary, for testing purposes
    get maxWeight() {
        return this._maxWeight;
    }

}
