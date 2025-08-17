//* https://leetcode.com/problems/new-21-game/

//* tc : O(n) | sc : O(n)

var new21Game = function(n, k, maxPts) {

    if(k === 0 || n >= k + maxPts){
        return 1.0;
    }

    let dp = new Array(n + 1).fill(0);
    dp[0] = 1.0

    let probabilitySum = 1.0;
    let result = 0.0;
    
    for(let i = 1; i <= n; i++){
        dp[i] = probabilitySum / maxPts;

        if(i < k){
            probabilitySum += dp[i];
        }
        else{
            result += dp[i];
        }

        if(i - maxPts >= 0 && i - maxPts < k){
            probabilitySum -= dp[i - maxPts];
        }
    }

    return result;
};