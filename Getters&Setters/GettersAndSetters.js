"use strict";
class Employee {
    name;
    _salary;
    constructor(name, initialSalary) {
        this.name = name;
        this._salary = initialSalary;
    }
    get salary() {
        return this._salary;
    }
    set salary(amount) {
        if (amount < 0) {
            throw new Error("Salary cannot be negative.");
        }
        this._salary = amount;
    }
}
const employee = new Employee("Fazle Rabbi", 10000000);
console.log(employee.salary);
employee.salary = 12000000;
console.log(employee.salary);
