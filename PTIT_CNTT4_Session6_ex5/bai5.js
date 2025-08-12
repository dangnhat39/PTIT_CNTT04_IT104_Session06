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
            console.log("Đăng nhập thành công!");
        }
        else {
            console.log("Sai tài khoản hoặc mật khẩu!");
        }
    };
    Account.prototype.logout = function () {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công!");
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
            console.log("Tài khoản đã bị khóa!");
        }
    };
    return userAcc;
}(Account));
var user1 = new userAcc(1, "vinh", "123456", "user", "active");
user1.login("vinh", "123456");
user1.logout();
var user2 = new userAcc(2, "tuan", "654321", "user", "banned");
user2.login("tuan", "654321");
