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
var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    Employee.prototype.printInfo = function () {
        console.log("T\u00EAn: ".concat(this.name));
        console.log("C\u00F4ng ty: ".concat(this.company));
        console.log("S\u0110T: ".concat(this.phone));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, company, phone, teamSize) {
        var _this = _super.call(this, name, company, phone) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        console.log("Qu\u1EA3n l\u00FD nh\u00F3m: ".concat(this.teamSize, " ng\u01B0\u1EDDi"));
    };
    Manager.prototype.getCompanyName = function () {
        return this.company;
    };
    return Manager;
}(Employee));
var emp = new Employee("Nguyễn Văn A", "FPT Software", "0909 123 456");
emp.printInfo();
console.log("----------");
var manager = new Manager("Trần Văn B", "VNG", "0912 456 789", 10);
manager.printInfo();
console.log("Tên công ty của Manager:", manager.getCompanyName());
