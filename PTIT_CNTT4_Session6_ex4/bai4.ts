interface Geometry {
    calculateArea(): number;       
    calculatePerimeter(): number;  
}

class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const myCircle = new Circle(5);
console.log("Hình tròn:");
console.log("Diện tích:", myCircle.calculateArea().toFixed(2));
console.log("Chu vi:", myCircle.calculatePerimeter().toFixed(2));

const myRectangle = new Rectangle(4, 6);
console.log("\nHình chữ nhật:");
console.log("Diện tích:", myRectangle.calculateArea());
console.log("Chu vi:", myRectangle.calculatePerimeter());
