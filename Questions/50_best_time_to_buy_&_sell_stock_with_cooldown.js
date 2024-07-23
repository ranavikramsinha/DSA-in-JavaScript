//* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

var maxProfit = function(prices) {

    const n = prices.length
    const dp = Array.from({length: n}, () => Array(2).fill(-1))

    return profit(prices, 0, n, true)

    function profit(prices, day, n, buy){

        if(day >= n){
            return 0
        }

        if(dp[day][buy ? 1 : 0] !== -1){
            return dp[day][buy ? 1 : 0]
        }

        let maxProfit;

        if(buy){
            const take = profit(prices, day + 1, n, false) - prices[day]
            const notTake = profit(prices, day + 1, n, true)

            maxProfit = Math.max(take, notTake)
        }
        else{
            const sell = prices[day] + profit(prices, day + 2, n, true)
            const notSell = profit(prices, day + 1, n, false)

            maxProfit = Math.max(sell, notSell)
        }

        dp[day][buy ? 1 : 0] = maxProfit
        return maxProfit
    }
    
};