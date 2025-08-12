class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }

    protected addHistory(message: string): void {
        this.history.push(message);
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.addHistory(`Nạp ${amount} VND - Số dư: ${this.balance}`);
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.addHistory(`Rút ${amount} VND - Số dư: ${this.balance}`);
        }
    }

    public showHistory(): void {
        console.log(`Lịch sử giao dịch tài khoản ${this.accountNumber}:`);
        this.history.forEach(h => console.log(h));
    }
}

class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    public withdraw(amount: number): void {
        if (amount > 0 && this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            this.addHistory(`Rút ${amount} VND - Số dư: ${this.balance}`);
        } else {
            this.addHistory(`Rút thất bại ${amount} VND - Vượt hạn mức thấu chi`);
        }
    }
}

// --- Test ---
const acc2 = new CheckingAccount("987654321", 500000, 200000);
acc2.deposit(300000);
acc2.withdraw(600000);
acc2.withdraw(500000);
acc2.showHistory();
