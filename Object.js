"use strict";
const user = {
    name: "Fazle Rabbi",
    email: "fazlerabbi@gmail.com",
    isActive: true,
    deactivate() {
        this.isActive = false;
        console.log(`${this.name} has been deactivate.`);
    },
};
const product = {
    name: "i phone 17 pro",
    price: 15000000,
    inStock: true,
    sell() {
        this.inStock = false;
        console.log(`${this.name} is not available.`);
    },
};
product.sell();
console.log(product.inStock);
