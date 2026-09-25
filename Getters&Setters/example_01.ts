class Product {
  constructor(
    private basePrice: number,
    private taxRate: number,
  ) {}

  get finalPrice(): number {
    return Math.round(this.basePrice * (1 + this.taxRate) * 100) / 100;
  }
}

const item = new Product(100, 0.15);
console.log(item.finalPrice);
