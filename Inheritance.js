"use strict";
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
    describe() {
        return `${this.name} earns $${this.salary}`;
    }
}
class Manager extends Employee {
    department;
    team = [];
    constructor(name, initialSalary, department) {
        super(name, initialSalary);
        this.department = department;
    }
    addTeamMember(employeeName) {
        this.team.push(employeeName);
        console.log(`${employeeName} added to ${this.department} team`);
    }
    describe() {
        return `${super.describe()} and manages ${this.team.length} people in ${this.department} team.`;
    }
}
const manager = new Manager("Alom", 10000000, "Engineering");
manager.addTeamMember("Ali");
manager.addTeamMember("jabi");
manager.addTeamMember("monir");
manager.addTeamMember("roni");
manager.addTeamMember("rakib");
manager.raiseSalary(2000000);
console.log(manager.describe());
