class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`SĐT: ${this.phone}`);
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    public printInfo(): void {
        super.printInfo();
        console.log(`Quản lý nhóm: ${this.teamSize} người`);
    }

    public getCompanyName(): string {
        return this.company;
    }
}

const emp = new Employee("Nguyễn Văn A", "FPT Software", "0909 123 456");
emp.printInfo();

console.log("----------");

const manager = new Manager("Trần Văn B", "VNG", "0912 456 789", 10);
manager.printInfo();
console.log("Tên công ty của Manager:", manager.getCompanyName());
