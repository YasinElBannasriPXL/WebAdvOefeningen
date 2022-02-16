"use strict";

import Container from './cargo/Container';
import Product from './cargo/Product';

try{
    let product1=new Product(1,200);
    let product2=new Product(2,100);
    let product3=new Product(3,400);
    let container=new Container(700);
    container.addProduct(product1);
    container.addProduct(product2);
    console.log(container.getProductAtIndex(1).weight);
    container.addProduct(product3);
    let container2 = new Container(1);
    let product4 = new Product(4, 2);
    let product5 = new Product(4, 2);
    container2.addProduct(product4);
    // container2.addProduct(product5);
    console.log(container2.getProductAtIndex(0));
    // console.log(container2.getProductAtIndex(2));
} catch(error){
    console.log(error.message);
}





