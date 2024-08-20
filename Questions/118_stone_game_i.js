//* https://leetcode.com/problems/stone-game/

var stoneGame = function(piles) {
    let n = piles.length;
    let dp = Array.from({length: n}, () => new Array(n).fill(-1));

    function solve(i, j, piles){
        if(i > j){
            return 0;
        }

        if(dp[i][j] !== -1){
            return dp[i][j];
        }

        dp[i][j] = Math.max(piles[i] - solve(i + 1, j, piles), piles[j] - solve(i, j - 1, piles));
        return dp[i][j];
    }

    return solve(0, n - 1, piles) > 0;
};