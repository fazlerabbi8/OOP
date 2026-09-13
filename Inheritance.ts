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

const manager = new Manager("Alom", 10000000, "Engineering");

manager.addTeamMember("Ali");
manager.addTeamMember("jabi");
manager.addTeamMember("monir");
manager.addTeamMember("roni");
manager.addTeamMember("rakib");
manager.raiseSalary(2000000);
console.log(manager.describe());
