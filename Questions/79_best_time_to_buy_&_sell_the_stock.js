//* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {

    let n = prices.length;
    let min = prices[0];
    let maxProfit = 0;
    let cost = 0

    for(let i = 0; i < n; i++){
        cost = prices[i] - min;
        maxProfit = Math.max(maxProfit, cost);
        min = Math.min(min, prices[i]);
    }

    return maxProfit;
    
};