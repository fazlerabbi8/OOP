"use strict";
class Product {
    name;
    price;
    inStock;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.inStock = true;
    }
    sell() {
        this.inStock = false;
        console.log(`${this.name} has been sold.`);
    }
}
const iphone = new Product("iPhone 17 Pro", 999);
const macbook = new Product("MacBook Pro", 1999);
iphone.sell();
macbook.sell();
console.log(macbook.inStock);
console.log(iphone.inStock);
