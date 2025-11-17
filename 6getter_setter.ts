class BankAccount {
  readonly userId: number;
  userName: string;
  private _userBalance: number;
  protected userPassword: string;

  constructor(id: number, name: string, password: string, balance: number) {
    this.userId = id;
    this.userName = name;
    this.userPassword = password;
    this._userBalance = balance;
  }

  setBalance(amount: number) {
    this._userBalance = amount;
  }
  getBalance() {
    return this._userBalance;
  }
  addBalanceFunction(amount: number) {
    this._userBalance += amount;
  }

  //* using getter and setter
  get userBalance() {
    return this._userBalance;
  }
  set userBalance(amount: number) {
    this._userBalance = amount;
  }
  set addBalance(amount: number) {
    this._userBalance += amount;
  }
}

const myAccount = new BankAccount(1, "Sajid", "123456", 1000);
console.log(myAccount);

// functional way
myAccount.setBalance(2000);
myAccount.addBalanceFunction(500);
console.log(myAccount.getBalance());

// using getter and setter
myAccount.userBalance = 5000;
myAccount.addBalance = 1000;
console.log(myAccount.userBalance);
