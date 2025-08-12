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

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp ${amount} VND - Số dư: ${this.balance}`);
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút ${amount} VND - Số dư: ${this.balance}`);
        }
    }

    public showHistory(): void {
        console.log(`Lịch sử giao dịch tài khoản ${this.accountNumber}:`);
        this.history.forEach(h => console.log(h));
    }
}

class SavingAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            if (this.balance < 0) this.balance = 0;
            this.history.push(`Rút ${amount} VND - Số dư: ${this.balance}`);
        }
    }
}

// --- Test ---
const acc1 = new SavingAccount("123456789", 1000000, 0.05);
acc1.deposit(500000);
acc1.withdraw(300000);
acc1.withdraw(1500000); 
acc1.showHistory();
