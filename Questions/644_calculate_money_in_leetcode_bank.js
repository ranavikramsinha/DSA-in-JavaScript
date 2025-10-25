//* https://leetcode.com/problems/calculate-money-in-leetcode-bank/

//* tc : O(n) | sc : O(1)

var totalMoney = function(n) {

    let total = 0;
    let dailyDeposit = 0;

    for (let i = 0; i < n; i++) {
        dailyDeposit = (i % 7 === 0) ? Math.floor(i / 7) + 1 : ++dailyDeposit;
        total += dailyDeposit;
    }

    
    return total;
    
};