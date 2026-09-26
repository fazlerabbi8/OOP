class Employee {
    private static totalEmloyees: number = 0;

    constructor(public name: string){
        Employee.totalEmloyees++;
    }

    static getTotalEmployees(): number {
        return Employee.totalEmloyees;
    }
}

const employee1 = new Employee("Fazle");
const employee2 = new Employee("ali");
const employee3 = new Employee("sakib");

console.log(Employee.getTotalEmployees());