class Employee {
  private salary: number;

  constructor(
    public name: string,
    initialSalary: number,
  ) {
    this.salary = initialSalary;
  }

  raiseSalary(amount: number): void {
    if (amount <= 0) {
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

  constructor(
    name: string,
    initialSalary: number,
    private department: string,
  ) {
    super(name, initialSalary);
  }

  addTeamMember(employeeName: string): void {
    this.team.push(employeeName);

    console.log(`${employeeName} added to ${this.department} team`);
  }

  describe(): string {
    return `${super.describe()} and manages ${this.team.length} people in ${this.department} team.`;
  }
}

class Intern extends Employee {
  constructor(
    name: string,
    initialSalary: number,
    protected mentor: string,
  ) {
    super(name, initialSalary);
  }

  checkInWithMentor(): void {
    console.log(`${this.name} is checking in with mentor ${this.mentor}.`);
  }

  describe(): string {
    return `${super.describe()} and is mentored by ${this.mentor}`;
  }
}



const manager = new Manager("Fazle Rabbi", 2000000, "Engineering");

manager.addTeamMember("Ali");
manager.addTeamMember("jabi");
manager.addTeamMember("monir");
manager.addTeamMember("roni");
manager.addTeamMember("rakib");

console.log(manager.describe())

const staff: Employee[] = [
  new Employee("Abdulllah", 7500000),
//   new Manager("Fazle Rabbi", 2000000, "Engineering"),
  new Intern("Jami", 900000, "Any"),
];

function printPayroll(employees: Employee[]): void {
  for (const employee of employees) {
    console.log(employee.describe());
  }
}


printPayroll(staff);
