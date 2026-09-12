"use strict";
class BankAccount {
    owner;
    balance;
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposite must be positive.");
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount("Fazle Rabbi", 1000);
account.deposit(1000);
// account.withdraw(1000);
// console.log(account.getBalance());
// problem 
class Employee {
    name;
    salary;
    constructor(name, initialSalary) {
        this.name = name;
        this.salary = initialSalary;
    }
    raiseSalary(amount) {
        if (amount <= 0) {
            throw new Error("Salary must be positive.");
        }
        this.salary += amount;
    }
    getSalary() {
        return this.salary;
    }
}
const salaryAmount = new Employee("Fazle Rabbi", 1000000);
salaryAmount.raiseSalary(1000000);
console.log(salaryAmount.getSalary());
