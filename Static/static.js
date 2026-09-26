"use strict";
class Employee {
    name;
    static totalEmloyees = 0;
    constructor(name) {
        this.name = name;
        Employee.totalEmloyees++;
    }
    static getTotalEmployees() {
        return Employee.totalEmloyees;
    }
}
const employee1 = new Employee("Fazle");
const employee2 = new Employee("ali");
const employee3 = new Employee("sakib");
console.log(Employee.getTotalEmployees());
