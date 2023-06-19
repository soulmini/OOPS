function BackAccount(costumerName, balance) {
    if (balance === void 0) { balance = 0; }
    this.costumerName = costumerName;
    this.accountNumber = 111;
    this.balance = balance;
    // method
    // this.deposit = (amount) => {
    //     this.balance += amount;
    // }
}

var rakeshAccount = new BackAccount('Rakesh k', 1000);
BackAccount.prototype.deposit = function(amount) {
    this.balance += amount;
}
rakeshAccount.deposit(5000);
console.log(rakeshAccount.balance);