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
class Intern extends Employee {
    mentor;
    constructor(name, initialSalary, mentor) {
        super(name, initialSalary);
        this.mentor = mentor;
    }
    checkInWithMentor() {
        console.log(`${this.name} is checking in with mentor ${this.mentor}.`);
    }
    describe() {
        return `${super.describe()} and is mentored by ${this.mentor}`;
    }
}
const manager = new Manager("Fazle Rabbi", 2000000, "Engineering");
manager.addTeamMember("Ali");
manager.addTeamMember("jabi");
manager.addTeamMember("monir");
manager.addTeamMember("roni");
manager.addTeamMember("rakib");
console.log(manager.describe());
const staff = [
    new Employee("Abdulllah", 7500000),
    //   new Manager("Fazle Rabbi", 2000000, "Engineering"),
    new Intern("Jami", 900000, "Any"),
];
function printPayroll(employees) {
    for (const employee of employees) {
        console.log(employee.describe());
    }
}
printPayroll(staff);
