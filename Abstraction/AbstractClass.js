"use strict";
class PaymentMethod {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    logTransaction() {
        console.log(`Processing payment of $${this.amount}`);
    }
}
class CreditCardPayment extends PaymentMethod {
    processPayment() {
        this.logTransaction();
        console.log(`Charged $${this.amount} to credit card.`);
    }
}
class PayPalPayment extends PaymentMethod {
    processPayment() {
        this.logTransaction();
        console.log(`Sent $${this.amount} via PayPal.`);
    }
}
function checkout(payment) {
    payment.processPayment();
}
checkout(new CreditCardPayment(1000));
checkout(new PayPalPayment(500));
