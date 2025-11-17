class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number;
    protected userPassword: string;

    constructor(id: number, name: string, balance: number, password: string) {
        this.userId = id;
        this.userName = name;
        this.userBalance = balance;
        this.userPassword = password;
    }
    addBalance(amount: number) {
        this.userBalance += amount;
    }
}




const sajidAccount = new BankAccount(1001, 'Sajid', 1000, '1234');
sajidAccount.addBalance(500);
console.log(sajidAccount);


class StudentAccount extends BankAccount {
    studentId: number;
    constructor(id: number, name: string, balance: number, password: string, studentId: number) {
        super(id, name, balance, password);
        this.studentId = studentId;     // doesnt recommend balance but recomment password
    }

    getPassword() {
        return this.userPassword;
    }
}

const studentAccount = new StudentAccount(1001, 'Sajid', 1000, '1234', 123);
console.log(studentAccount);
console.log(studentAccount.getPassword());