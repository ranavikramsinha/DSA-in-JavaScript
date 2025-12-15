//* https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/

//* tc : O(n) | sc : O(1)

var getDescentPeriods = function(prices) {

    let n = prices.length;
    let previous = 1;
    let total = 1;

    for (let i = 1; i < n; i++) {
        if (prices[i] === prices[i - 1] - 1) {
            previous += 1;
        }
        else {
            previous = 1;
        }

        total += previous;
    }

    return total;
    
};