var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    Vehicle.prototype.slowDown = function (amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0;
    };
    Vehicle.prototype.speedUp = function (amount) {
        this.speed += amount;
    };
    Vehicle.prototype.showSpeed = function () {
        console.log("T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i c\u1EE7a ".concat(this.name, ": ").concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(name, speed, id, gear) {
        var _this = _super.call(this, name, speed, id) || this;
        _this.gear = gear;
        return _this;
    }
    Bicycle.prototype.showInfo = function () {
        console.log("Xe \u0111\u1EA1p: ".concat(this.name, ", ID: ").concat(this.id, ", S\u1ED1 b\u00E1nh r\u0103ng: ").concat(this.gear));
        this.showSpeed();
    };
    return Bicycle;
}(Vehicle));
var bike = new Bicycle("Xe đạp thể thao", 10, 1, 6);
bike.showInfo();
bike.speedUp(5);
bike.showSpeed();
bike.slowDown(8);
bike.showSpeed();
