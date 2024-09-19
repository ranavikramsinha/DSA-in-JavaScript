//* https://leetcode.com/problems/climbing-stairs/

var climbStairs = function(n) {

    let dp = new Array(n + 1).fill(-1);
    return solve(n);

    function solve(n){
        if(n < 0){
            return 0;
        }

        if(n === 0){
            return 1;
        }

        if(dp[n] !== -1){
            return dp[n];
        }

        let oneStep = solve(n - 1);
        let twoStep = solve(n - 2);

        dp[n] = oneStep + twoStep;
        
        return dp[n];
    }
};