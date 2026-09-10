class Product {
  name: string;
  price: number;
  quantity: number;
  inStock: boolean;

  constructor(name: string, price: number,  quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.inStock = true;
  }

  sell(): void {
    this.inStock = false;
    console.log(`${this.name} has been sold.`);
  }
}

const iphone = new Product("iPhone 17 Pro", 999, 10);
const macbook = new Product("MacBook Pro", 1999,20);

iphone.sell(); 
// macbook.sell();
// console.log(macbook.inStock);
console.log(iphone.inStock);
console.log(iphone.quantity);