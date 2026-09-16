abstract class PaymentMethod {
    constructor(protected amount: number) {}

    abstract processPayment(): void;

    logTransaction(): void {
        console.log(`Processing payment of $${this.amount}`);
    }
}

class CreditCardPayment extends PaymentMethod{
    processPayment(): void {
        this.logTransaction();
        console.log(`Charged $${this.amount} to credit card.`);
    }
}