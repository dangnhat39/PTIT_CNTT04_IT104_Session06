class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    public slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0;
    }

    public speedUp(amount: number): void {
        this.speed += amount;
    }

    public showSpeed(): void {
        console.log(`Tốc độ hiện tại của ${this.name}: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    public showInfo(): void {
        console.log(`Xe đạp: ${this.name}, ID: ${this.id}, Số bánh răng: ${this.gear}`);
        this.showSpeed();
    }
}

const bike = new Bicycle("Xe đạp thể thao", 10, 1, 6);
bike.showInfo();
bike.speedUp(5);
bike.showSpeed();
bike.slowDown(8);
bike.showSpeed();
