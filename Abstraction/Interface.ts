interface Shippable {
  weight: number;
  calculateShippingCost(): number;
}

class Book implements Shippable {
  constructor(public weight: number) {}
  calculateShippingCost(): number {
    return this.weight * 2;
  }
}

class Furniture implements Shippable {
  constructor(public weight: number) {}
  calculateShippingCost(): number {
    return this.weight * 5 + 20;
  }
}

function getShippingLabel(item: Shippable): string {
  return `Shipping cost: $${item.calculateShippingCost()}`;
}

const book = new Book(10);
const furniture = new Furniture(10);

console.log(getShippingLabel(book))
console.log(getShippingLabel(furniture))
