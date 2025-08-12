abstract class Job {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    // Method thông thường
    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    // Abstract method (không có thân hàm)
    abstract calculateSalary(): number;
}

class ParttimeJob extends Job {
    private workingHour: number;

    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }

    // Bắt buộc implement abstract method
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor(type: string) {
        super(type);
    }

    calculateSalary(): number {
        return 10000000;
    }
}

// Test
const parttime = new ParttimeJob("Part-time", 80);
const fulltime = new FulltimeJob("Full-time");

parttime.printType(); // method thường
console.log("Lương:", parttime.calculateSalary()); // abstract method

fulltime.printType();
console.log("Lương:", fulltime.calculateSalary());
