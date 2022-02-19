import Product from '../../../src/js/cargo/Product';
import Container from '../../../src/js/cargo/Container';


test('not instance of product throws error', () => {
    expect(() => {
        let aString = "not a product";
        let aContainer = new Container(20000);
        aContainer.addProduct(aString);

    }).toThrow();
})



test('id already in container throws error', () => {
    expect(() => {
        let product = new Product(1);
        let productWithSameId = new Product(1);
        let aContainer = new Container(20000);
        aContainer.addProduct(product);
        aContainer.addProduct(productWithSameId);


    }).toThrow();
})


test('weight exceeded throws error', () => {
    expect(() => {
        let product = new Product(1, 1021);
        let productWithSameId = new Product(2, 1);
        let aContainer = new Container(100);
        aContainer.addProduct(product);
        aContainer.addProduct(productWithSameId);


    }).toThrow();
})

