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
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history.push("N\u1EA1p ".concat(amount, " VND - S\u1ED1 d\u01B0: ").concat(this.balance));
        }
    };
    Account.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push("R\u00FAt ".concat(amount, " VND - S\u1ED1 d\u01B0: ").concat(this.balance));
        }
    };
    Account.prototype.showHistory = function () {
        console.log("L\u1ECBch s\u1EED giao d\u1ECBch t\u00E0i kho\u1EA3n ".concat(this.accountNumber, ":"));
        this.history.forEach(function (h) { return console.log(h); });
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, initialBalance, interestRate) {
        var _this = _super.call(this, accountNumber, initialBalance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            if (this.balance < 0)
                this.balance = 0;
            this.history.push("R\u00FAt ".concat(amount, " VND - S\u1ED1 d\u01B0: ").concat(this.balance));
        }
    };
    return SavingAccount;
}(Account));
// --- Test ---
var acc1 = new SavingAccount("123456789", 1000000, 0.05);
acc1.deposit(500000);
acc1.withdraw(300000);
acc1.withdraw(1500000);
acc1.showHistory();
