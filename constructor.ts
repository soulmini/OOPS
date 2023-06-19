function BackAccount(costumerName : String, balance : Number = 0) {
    this.costumerName = costumerName;
    this.accountNumber = 111;
    this.balance = balance;
}


const rakeshAccount = new BackAccount('Rakesh k', 1000);
console.log(rakeshAccount.balance);