/*jslint node: true */
"use strict";
// naam: Yasin El Bannasri
import Product from "./Product";
export default class Container {
  constructor(maxWeight) {
    if (maxWeight < 0) {
      throw new Error("Maxweight under 0");
    } else {
      this._products = [];
      this._maxWeight = maxWeight;
    }
  }
  addProduct(product) {
    if (product instanceof Product) {
      // this._products.forEach(p => {
      //     if (p.id === product.id) {
      //         throw new Error('Product already in container');
      //     }
      // });
      const idFound = this._products.some((p) => p.id === product.id);
      if (idFound) {
        throw new Error("Product already in container");
      }
      let totalWeight = this.calculateTotalWeight(this._products, product);
      // console.log(`Before TOTALWEIGHT the weight is: ${totalWeight} and ${totalWeight > this._maxWeight} \n maxweight is ${this._maxWeight}`)
      if (totalWeight > this._maxWeight) {
        throw new Error("Too heavy");
      }
      // console.log("after too heavy");
      this._products.push(product);
    } else {
      throw new Error("Not instance of product)");
    }
  }
  calculateTotalWeight(products, newProduct) {
    let totalWeight = 0;
    products.forEach((p) => {
      totalWeight += p.weight;
    });
    totalWeight += newProduct.weight;
    return totalWeight;
  }

  getProductAtIndex(index) {
    if (
      index >= 0 &&
      typeof index === "number" &&
      index < this._products.length
    ) {
      return this._products[index];
    } else {
      throw new Error("Index out of bounds");
    }
  }

  //unnecessary, for testing purposes
  get maxWeight() {
    return this._maxWeight;
  }
}
