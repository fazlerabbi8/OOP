// example-1
type User = {
    name: string;
    email: string;
    isActive: boolean;
    deactivate(): void;
}

const user: User = {
    name:"Fazle Rabbi",
    email: "fazlerabbi@gmail.com",
    isActive: true,
    deactivate() {
        this.isActive = false;
        console.log(`${this.name} has been deactivate.`);
    },
};

// user.deactivate();
// console.log(user.isActive);

// example-2
type Product = {
    name: string;
    price: number;
    inStock: boolean;
    sell(): void;
}


const product: Product = {
    name: "i phone 17 pro",
    price: 15000000,
    inStock: true,
    sell() {
        this.inStock = false;
        console.log(`${this.name} is not available.`)
    },
}

product.sell();
console.log(product.inStock);