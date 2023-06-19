class BankAccount {
    accountName;
    accountNumber = 111;
    #balance = 0;

    constructor(costumerName, balance) {
        this.accountName = costumerName;
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }

    setBalance(amount) {
        if (isNaN(amount)) {
            throw new Error('Amount is not a valid Input');
        }
        this.#balance = amount;
    }
    // get methods
    get balance() {
        return this.#balance;
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

const rakeshAccount = new CurrentAccount('Rakesh', 10000);
rakeshAccount.setBalance(5000);



console.log(rakeshAccount.balance);