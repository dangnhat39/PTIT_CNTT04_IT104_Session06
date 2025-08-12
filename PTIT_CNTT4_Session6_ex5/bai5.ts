interface changeSpeed {
    speedUp(amount: number): void;
    slowDown(amount: number): void;
    stop(): void;
}

class Vehicle implements changeSpeed {
    private speed: number;

    constructor(speed: number = 0) {
        this.speed = speed;
    }

    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }

    slowDown(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Phương tiện đã dừng. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}

const myVehicle = new Vehicle();
myVehicle.speedUp(50);
myVehicle.slowDown(20);
myVehicle.stop();
