"use strict";
class Product {
    basePrice;
    taxRate;
    constructor(basePrice, taxRate) {
        this.basePrice = basePrice;
        this.taxRate = taxRate;
    }
    get finalPrice() {
        return Math.round(this.basePrice * (1 + this.taxRate) * 100) / 100;
    }
}
const item = new Product(100, 0.15);
console.log(item.finalPrice);
