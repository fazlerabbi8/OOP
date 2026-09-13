class Employee {
    private salary: number;

    constructor(public name: string, initialSalary: number){
        this.salary = initialSalary;
    }

    raiseSalary(amount: number): void {
        if(amount <= 0){
            throw new Error("Salary must be positive.");
        }
        this.salary += amount;
    }

    getSalary(): number {
        return this.salary;
    }

    describe(): string {
        return `${this.name} earns $${this.salary}`;
    }
}

class Manager extends Employee {
    private team: string[] = [];

    
}