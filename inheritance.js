// Inheritance using Constructor
// function BackAccount(costumerName, balance) {
//     if (balance === void 0) { balance = 0; }
//     this.costumerName = costumerName;
//     this.accountNumber = 111;
//     this.balance = balance;
// }

// BackAccount.prototype.deposit = function(amount) {
//     this.balance += amount;
// }

// function CurrentAccount(costumerName, balance) {
//     // propertise Inheritance
//     BackAccount.call(this, costumerName, balance);
//     this.TransactionLimit = 5000;
// }
// // method inheritance
// CurrentAccount.prototype = Object.create(BackAccount.prototype);

// const rakeshAccount = new CurrentAccount('rakesh', 5000);

// console.log(rakeshAccount);



// Inheritance using Class

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


class CurrentAccount extends BankAccount {
    TransactionLimit = 5000;
    constructor(costumerName, balance) {
        super(costumerName, balance);
    }
    load(amount) {
        console.log('takes load', amount);
    }
}


const RakeshAccount = new CurrentAccount('rakesh', 1000);
console.log(RakeshAccount.load(600000));