"use strict";
class Book {
    weight;
    constructor(weight) {
        this.weight = weight;
    }
    calculateShippingCost() {
        return this.weight * 2;
    }
}
class Furniture {
    weight;
    constructor(weight) {
        this.weight = weight;
    }
    calculateShippingCost() {
        return this.weight * 5 + 20;
    }
}
function getShippingLabel(item) {
    return `Shipping cost: $${item.calculateShippingCost()}`;
}
const book = new Book(10);
const furniture = new Furniture(10);
console.log(getShippingLabel(book));
console.log(getShippingLabel(furniture));
