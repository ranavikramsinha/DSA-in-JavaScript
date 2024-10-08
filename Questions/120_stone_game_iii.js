//* https://leetcode.com/problems/stone-game-iii/

//* Recursion + Memo
var stoneGameIII = function(stoneValue) {
    let n = stoneValue.length;
    let dp = Array(n + 1).fill(-1);
    let result = solve(stoneValue, 0);

    function solve(stoneValue, i){
        if(i >= n){
            return 0;
        }

        if(dp[i] !== -1){
            return dp[i];
        }

        let result = stoneValue[i] - solve(stoneValue, i + 1);

        if(i + 1 < n){
            result = Math.max(result, stoneValue[i] + stoneValue[i + 1] - solve(stoneValue, i + 2));
        }

        if(i + 2 < n){
            result = Math.max(result, stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - solve(stoneValue, i + 3));
        }

        dp[i] = result;
        return dp[i];
    }

    if(result < 0){
        return 'Bob';
    }
    else if(result > 0){
        return 'Alice';
    }
    else{
        return 'Tie';
    }
};

//* Bottom Up
var stoneGameIII = function(stoneValue) {
    let n = stoneValue.length;
    let dp = new Array(n + 1).fill(0);
    
    for(let i = n - 1; i >= 0; i--){
        dp[i] = stoneValue[i] - dp[i + 1];

        if(i + 2 <= n){
            dp[i] = Math.max(dp[i], stoneValue[i] + stoneValue[i + 1] - dp[i + 2]);
        }

        if(i + 3 <= n){
            dp[i] = Math.max(dp[i], stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[i + 3]);
        }
    }

    let result = dp[0];

    if(result < 0){
        return 'Bob';
    }
    else if(result > 0){
        return 'Alice';
    }
    else{
        return 'Tie';
    }
};