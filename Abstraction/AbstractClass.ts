abstract class PaymentMethod {
    constructor(protected amount: number) {}

    abstract processPayment(): void;

    logTransaction(): void {
        console.log(`Processing payment of $${this.amount}`);
    }
}