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
var Account = /** @class */ (function () {
    function Account(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    Account.prototype.login = function (userName, password) {
        if (this.userName === userName && this.password === password) {
            this.isLogin = true;
            console.log("".concat(this.userName, " \u0111\u0103ng nh\u1EADp th\u00E0nh c\u00F4ng!"));
        }
        else {
            console.log("Sai tài khoản hoặc mật khẩu!");
        }
    };
    Account.prototype.logout = function () {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("".concat(this.userName, " \u0111\u00E3 \u0111\u0103ng xu\u1EA5t!"));
        }
    };
    return Account;
}());
var userAcc = /** @class */ (function (_super) {
    __extends(userAcc, _super);
    function userAcc(id, userName, password, role, status) {
        var _this = _super.call(this, id, userName, password, role) || this;
        _this.status = status;
        return _this;
    }
    userAcc.prototype.login = function (userName, password) {
        if (this.status === "active") {
            _super.prototype.login.call(this, userName, password);
        }
        else if (this.status === "banned") {
            console.log("T\u00E0i kho\u1EA3n ".concat(this.userName, " \u0111\u00E3 b\u1ECB kh\u00F3a!"));
        }
    };
    userAcc.prototype.setStatus = function (newStatus) {
        this.status = newStatus;
    };
    userAcc.prototype.getStatus = function () {
        return this.status;
    };
    return userAcc;
}(Account));
var adminAcc = /** @class */ (function (_super) {
    __extends(adminAcc, _super);
    function adminAcc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    adminAcc.prototype.banUser = function (user) {
        user.setStatus("banned");
        console.log("T\u00E0i kho\u1EA3n ".concat(user['userName'], " \u0111\u00E3 b\u1ECB admin kh\u00F3a!"));
    };
    return adminAcc;
}(Account));
// --- Test ---
var user1 = new userAcc(1, "vinh", "123456", "user", "active");
var admin1 = new adminAcc(99, "admin", "admin123", "admin");
user1.login("vinh", "123456");
admin1.banUser(user1);
user1.login("vinh", "123456");
