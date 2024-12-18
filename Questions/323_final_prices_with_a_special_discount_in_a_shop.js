//* https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

//* tc O(n) | sc O(n)

var finalPrices = function(prices) {

    let n = prices.length;
    let monotonicStack = [];
    let ans = [...prices];

    for(let i = 0; i < n; i++){
        
        while(monotonicStack.length > 0 && prices[i] <= prices[monotonicStack[monotonicStack.length - 1]]){
            ans[monotonicStack.pop()] -= prices[i];
        }

        monotonicStack.push(i);
    }

    return ans;
    
};