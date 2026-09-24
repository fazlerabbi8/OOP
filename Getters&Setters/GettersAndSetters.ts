class Employee {
    private _salary: number;

    constructor(public name: string, initialSalary: number){
        this._salary = initialSalary;
    }

    get salary(): number{
        return this._salary;
    }

    set salary(amount: number){
        if(amount < 0){
            throw new Error("Salary cannot be negative.");
        }
        this._salary = amount;
    }
}

const employee = new Employee("Fazle Rabbi", 10000000);
console.log(employee.salary)
employee.salary = 12000000;
console.log(employee.salary);