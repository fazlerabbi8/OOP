class BankAccount {
    private balance: number;

    constructor(private owner: string, initialBalance: number){
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if(amount <= 0){
            throw new Error("Deposite must be positive.");
        }
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if(amount > this.balance){
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
    }
    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount("Fazle Rabbi",1000);
account.deposit(1000);
// account.withdraw(1000);
console.log(account.getBalance());