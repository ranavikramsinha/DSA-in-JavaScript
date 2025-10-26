//* https://leetcode.com/problems/simple-bank-system/

//* tc : O(1) | sc : O(n)

var Bank = function(balance) {

    this.accounts = balance;
    
};

Bank.prototype.transfer = function(account1, account2, money) {

    let accountLength = this.accounts.length;

    if (account1 > accountLength || account2 > accountLength) {
        return false;
    }

    if (this.accounts[account1 - 1] < money) {
        return false;
    }

    this.accounts[account1 - 1] -= money;
    this.accounts[account2 - 1] += money;

    return true;
    
};

Bank.prototype.deposit = function(account, money) {

    let accountLength = this.accounts.length;

    if (account > accountLength) {
        return false;
    }
    this.accounts[account - 1] += money;

    return true;
};

Bank.prototype.withdraw = function(account, money) {

    let accountLength = this.accounts.length;

    if (account > accountLength) {
        return false;
    }

    if (this.accounts[account - 1] < money) {
        return false;
    }

    this.accounts[account - 1] -= money;

    return true;
    
};