//* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-using-strategy/

//* tc : O(n) | sc : O(n)

var maxProfit = function(prices, strategy, k) {

    let n = prices.length;
    let total = strategy.reduce((a, e, i) => a + e * prices[i], 0);
    let maxProfit = total;
    let prefixPrices = new Array(n+1).fill(0);
    let prefixStratPrices = new Array(n+1).fill(0);

    for (let i = 0; i < n; i++) {
        prefixPrices[i+1] = prefixPrices[i] + prices[i];
        prefixStratPrices[i+1] = prefixStratPrices[i] + strategy[i] * prices[i];
    }

    for (let i = 0; i <= n - k; i++) {
        let j = i + k;
        let original = prefixStratPrices[j] - prefixStratPrices[i];
        let newContribution = 0;

        newContribution += prefixPrices[j] - prefixPrices[i + k/2];

        let delta = newContribution - original;

        maxProfit = Math.max(maxProfit, total + delta);
    }

    return maxProfit;

};