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
            console.log("Đăng nhập thành công!");
        } else {
            console.log("Sai tài khoản hoặc mật khẩu!");
        }
    }

    public logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công!");
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
            console.log("Tài khoản đã bị khóa!");
        }
    }
}

const user1 = new userAcc(1, "vinh", "123456", "user", "active");
user1.login("vinh", "123456");
user1.logout();

const user2 = new userAcc(2, "tuan", "654321", "user", "banned");
user2.login("tuan", "654321");
