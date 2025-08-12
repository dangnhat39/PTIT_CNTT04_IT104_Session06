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
    function Account(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    Account.prototype.addHistory = function (message) {
        this.history.push(message);
    };
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            this.addHistory("N\u1EA1p ".concat(amount, " VND - S\u1ED1 d\u01B0: ").concat(this.balance));
        }
    };
    Account.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.addHistory("R\u00FAt ".concat(amount, " VND - S\u1ED1 d\u01B0: ").concat(this.balance));
        }
    };
    Account.prototype.showHistory = function () {
        console.log("L\u1ECBch s\u1EED giao d\u1ECBch t\u00E0i kho\u1EA3n ".concat(this.accountNumber, ":"));
        this.history.forEach(function (h) { return console.log(h); });
    };
    return Account;
}());
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, initialBalance, overdraftLimit) {
        var _this = _super.call(this, accountNumber, initialBalance) || this;
        _this.overdraftLimit = overdraftLimit;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            this.addHistory("R\u00FAt ".concat(amount, " VND - S\u1ED1 d\u01B0: ").concat(this.balance));
        }
        else {
            this.addHistory("R\u00FAt th\u1EA5t b\u1EA1i ".concat(amount, " VND - V\u01B0\u1EE3t h\u1EA1n m\u1EE9c th\u1EA5u chi"));
        }
    };
    return CheckingAccount;
}(Account));
// --- Test ---
var acc2 = new CheckingAccount("987654321", 500000, 200000);
acc2.deposit(300000);
acc2.withdraw(600000);
acc2.withdraw(500000);
acc2.showHistory();
