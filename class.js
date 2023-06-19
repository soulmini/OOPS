class BankAccount {
    accountName;
    balance = 0;
    accountNumber = 111;

    constructor(costumerName, balance) {
        this.accountName = costumerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }

}


const rakeshAccount = new BankAccount('Rakesh', 1000);

console.log(rakeshAccount);