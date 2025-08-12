class Account {
    protected id: number;
    protected userName: string;
    protected password: string;
    protected isLogin: boolean;
    protected role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    public login(userName: string, password: string): void {
        if (this.userName === userName && this.password === password) {
            this.isLogin = true;
            console.log(`${this.userName} đăng nhập thành công!`);
        } else {
            console.log("Sai tài khoản hoặc mật khẩu!");
        }
    }

    public logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log(`${this.userName} đã đăng xuất!`);
        }
    }
}

class userAcc extends Account {
    private status: string;

    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }

    public login(userName: string, password: string): void {
        if (this.status === "active") {
            super.login(userName, password);
        } else if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa!`);
        }
    }

    public setStatus(newStatus: string): void {
        this.status = newStatus;
    }

    public getStatus(): string {
        return this.status;
    }
}

class adminAcc extends Account {
    public banUser(user: userAcc): void {
        user.setStatus("banned");
        console.log(`Tài khoản ${user['userName']} đã bị admin khóa!`);
    }
}

// --- Test ---
const user1 = new userAcc(1, "vinh", "123456", "user", "active");
const admin1 = new adminAcc(99, "admin", "admin123", "admin");

user1.login("vinh", "123456");
admin1.banUser(user1);
user1.login("vinh", "123456");
