"use strict";
// naam:
import Product from './Product';
export default class Container{
    constructor(maxWeight) {
        if (maxWeight < 0) {
            throw new Error('Maxweight under 0');
        } else {
            this._products = [];
            const _maxWeight = maxWeight;
        }
    }
    addProduct(product) {
        if (product instanceof Product) {
            this._products.forEach(p => {
                if (p.id === product.id) {
                    throw new Error('Product already in container')
                }
            });
            let totalWeight = 0;
            this._products.forEach(p => {
                totalWeight += p.maxWeight;
            });
            this._products.push(product);
        } else {
            throw 'Not instance of product'
        }
    }
    getProductAtIndex(index) {
        if (index >= 0 && typeof index === 'number' && index < this._products.length) {
            return this._products[index];
        } else {
            throw new Error('Index out of bounds')
        }
    } 

}
